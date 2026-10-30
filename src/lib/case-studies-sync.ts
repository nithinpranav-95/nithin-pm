import { useState, useEffect, useCallback } from "react";
import { projects as staticProjects, type Project } from "./projects";

// Default or fallback Google Sheet ID (if user hasn't configured one yet)
export const DEFAULT_CASE_STUDIES_SHEET_ID = "";

export const STORAGE_KEYS = {
  SHEET_ID: "nithin_portfolio_case_studies_sheet_id",
  LOCAL_STUDIES: "nithin_portfolio_local_case_studies",
};

/**
 * Extracts the Google Sheet ID from a full Google Sheets URL or raw ID.
 */
export function extractSheetId(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  // If it's already an ID (alphanumeric and dashes/underscores, typically ~44 chars)
  if (/^[a-zA-Z0-9-_]{20,}$/.test(trimmed)) return trimmed;
  return trimmed;
}

/**
 * Cleans and normalizes any Canva link, share URL, or iframe snippet
 * into the embeddable Canva player URL with '?embed'.
 */
export function normalizeCanvaUrl(input: string): string {
  if (!input) return "";
  let url = input.trim();

  // Decode common HTML entities (e.g. from embed snippets)
  url = url
    .replace(/&#x2F;/g, "/")
    .replace(/&#x3A;/g, ":")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"');

  // If user pasted an iframe snippet, extract the src attribute
  const iframeMatch = url.match(/src=["']([^"']+)["']/i);
  if (iframeMatch) {
    url = iframeMatch[1];
  }

  // Handle protocol-relative URL
  if (url.startsWith("//")) {
    url = `https:${url}`;
  }

  // Ensure it's a Canva design link
  if (url.includes("canva.com/design/")) {
    // Strip trailing query params first
    const base = url.split("?")[0];
    return `${base}?embed`;
  }

  return url;
}

/**
 * Robust RFC 4180 compliant CSV parser. Handles commas in quotes and newlines.
 */
export function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentField += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        currentRow.push(currentField.trim());
        currentField = "";
      } else if (char === "\r") {
        if (nextChar === "\n") i++;
        currentRow.push(currentField.trim());
        rows.push(currentRow);
        currentRow = [];
        currentField = "";
      } else if (char === "\n") {
        currentRow.push(currentField.trim());
        rows.push(currentRow);
        currentRow = [];
        currentField = "";
      } else {
        currentField += char;
      }
    }
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    rows.push(currentRow);
  }

  return rows.filter((row) => row.some((cell) => cell.length > 0));
}

/**
 * Parses CSV text from a Google Sheet into an array of Project objects.
 */
export function parseGoogleSheetCaseStudies(
  csvText: string,
  startingNumber = 12
): Project[] {
  const rawRows = parseCSV(csvText);
  if (rawRows.length === 0) return [];

  // Determine if row 0 is a header row
  const firstRow = rawRows[0];
  const isHeader = firstRow.some((cell) => {
    const lower = cell.toLowerCase();
    return (
      lower.includes("title") ||
      lower.includes("company") ||
      lower.includes("canva") ||
      lower.includes("link") ||
      lower.includes("url") ||
      lower.includes("description")
    );
  });

  const header = isHeader ? firstRow.map((c) => c.toLowerCase().trim()) : null;
  const dataRows = isHeader ? rawRows.slice(1) : rawRows;

  const titleIdx = header
    ? header.findIndex((h) => h.includes("title") || h.includes("name"))
    : 0;
  const companyIdx = header
    ? header.findIndex((h) => h.includes("company") || h.includes("client"))
    : 1;
  const canvaIdx = header
    ? header.findIndex(
        (h) =>
          h.includes("canva") ||
          h.includes("link") ||
          h.includes("url") ||
          h.includes("embed")
      )
    : 2;
  const descIdx = header
    ? header.findIndex((h) => h.includes("desc") || h.includes("summary"))
    : 3;
  const yearIdx = header ? header.findIndex((h) => h.includes("year")) : 4;
  const roleIdx = header ? header.findIndex((h) => h.includes("role")) : 5;
  const outcomeIdx = header
    ? header.findIndex((h) => h.includes("outcome") || h.includes("type"))
    : 6;
  const hideIdx = header ? header.findIndex((h) => h.includes("hide")) : -1;

  const results: Project[] = [];

  dataRows.forEach((row, index) => {
    // 1. Locate the Canva URL
    let canvaRaw = canvaIdx >= 0 && row[canvaIdx] ? row[canvaIdx] : "";
    if (!canvaRaw || !canvaRaw.toLowerCase().includes("canva")) {
      const found = row.find((cell) => cell.toLowerCase().includes("canva.com"));
      if (found) canvaRaw = found;
    }

    if (!canvaRaw || !canvaRaw.toLowerCase().includes("canva")) {
      return; // Skip rows without Canva URLs
    }

    const canvaUrl = normalizeCanvaUrl(canvaRaw);
    const num = String(startingNumber + index).padStart(2, "0");

    let title = titleIdx >= 0 && row[titleIdx] ? row[titleIdx] : "";
    if (!title || title.toLowerCase().includes("canva.com")) {
      title = `Case Study ${num}`;
    }

    let company = companyIdx >= 0 && row[companyIdx] ? row[companyIdx] : "";
    if (!company || company.toLowerCase().includes("canva.com")) {
      company = title.split("—")[0].trim() || "Case Study";
    }

    const description =
      descIdx >= 0 && row[descIdx]
        ? row[descIdx]
        : "Interactive case study deck and strategic walkthrough.";

    const year =
      yearIdx >= 0 && row[yearIdx]
        ? row[yearIdx]
        : new Date().getFullYear().toString();

    const role =
      roleIdx >= 0 && row[roleIdx] ? row[roleIdx].toUpperCase() : "LEAD PM";

    const outcome =
      outcomeIdx >= 0 && row[outcomeIdx]
        ? row[outcomeIdx].toUpperCase()
        : "CASE STUDY";

    const hideOnHome =
      hideIdx >= 0 && row[hideIdx]
        ? row[hideIdx].toLowerCase() === "true" || row[hideIdx] === "1"
        : false;

    // Generate clean slug
    const cleanSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const slug = cleanSlug || `case-${num}`;

    results.push({
      slug,
      number: num,
      title,
      company,
      year,
      image: "",
      description,
      role,
      outcome,
      canvaUrl,
      hideOnHome,
      sections: [
        {
          heading: "Context & Overview",
          body: "Full case study presentation embedded directly from Canva. Review the slides above for the product teardown, workflow analysis, proposed strategy, and metrics.",
        },
      ],
    });
  });

  return results;
}

/**
 * Gets the current Google Sheet ID (checking localStorage, then env, then default).
 */
export function getActiveSheetId(): string {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEYS.SHEET_ID);
    if (saved) return saved;
  }
  return (
    import.meta.env.VITE_CASE_STUDIES_SHEET_ID ||
    DEFAULT_CASE_STUDIES_SHEET_ID ||
    ""
  );
}

/**
 * Fetches case studies from a public Google Sheet CSV export.
 */
export async function fetchGoogleSheetCaseStudies(
  sheetId?: string
): Promise<Project[]> {
  const id = sheetId || getActiveSheetId();
  if (!id) return [];

  const csvUrl = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv`;

  try {
    const response = await fetch(csvUrl);
    if (!response.ok) {
      console.warn(`Failed to fetch Google Sheet (${response.status})`);
      return [];
    }
    const csvText = await response.text();
    return parseGoogleSheetCaseStudies(csvText, staticProjects.length + 1);
  } catch (err) {
    console.error("Error fetching Google Sheet case studies:", err);
    return [];
  }
}

/**
 * Retrieves case studies saved in localStorage.
 */
export function getLocalCaseStudies(): Project[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LOCAL_STUDIES);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Saves a new case study to localStorage.
 */
export function saveLocalCaseStudy(project: Project): void {
  if (typeof window === "undefined") return;
  const current = getLocalCaseStudies();
  const filtered = current.filter((p) => p.slug !== project.slug);
  localStorage.setItem(
    STORAGE_KEYS.LOCAL_STUDIES,
    JSON.stringify([...filtered, project])
  );
}

/**
 * Removes a case study from localStorage.
 */
export function removeLocalCaseStudy(slug: string): void {
  if (typeof window === "undefined") return;
  const current = getLocalCaseStudies();
  const updated = current.filter((p) => p.slug !== slug);
  localStorage.setItem(STORAGE_KEYS.LOCAL_STUDIES, JSON.stringify(updated));
}

/**
 * Async lookup for a project by slug across static, Google Sheet, and local projects.
 */
export async function findProjectBySlug(slug: string): Promise<Project | undefined> {
  // 1. Static projects
  const staticFound = staticProjects.find((p) => p.slug === slug);
  if (staticFound) return staticFound;

  // 2. Local storage projects
  const localList = getLocalCaseStudies();
  const localFound = localList.find((p) => p.slug === slug);
  if (localFound) return localFound;

  // 3. Google Sheet projects
  const sheetProjects = await fetchGoogleSheetCaseStudies();
  return sheetProjects.find((p) => p.slug === slug);
}

/**
 * React hook that combines static projects with Google Sheet and local case studies.
 */
export function useAllCaseStudies() {
  const [sheetId, setSheetIdState] = useState<string>(() => getActiveSheetId());
  const [dynamicProjects, setDynamicProjects] = useState<Project[]>(() =>
    getLocalCaseStudies()
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = useCallback(async (targetSheetId?: string) => {
    const currentLocal = getLocalCaseStudies();
    const idToUse = targetSheetId !== undefined ? targetSheetId : getActiveSheetId();

    if (!idToUse) {
      setDynamicProjects(currentLocal);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const sheetStudies = await fetchGoogleSheetCaseStudies(idToUse);
      // Merge sheet studies + local studies, with sheet taking precedence if duplicate slugs
      const map = new Map<string, Project>();
      sheetStudies.forEach((p) => map.set(p.slug, p));
      currentLocal.forEach((p) => {
        if (!map.has(p.slug)) {
          map.set(p.slug, p);
        }
      });
      setDynamicProjects(Array.from(map.values()));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load Google Sheet");
      setDynamicProjects(currentLocal);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const updateSheetId = useCallback(
    (newId: string) => {
      const cleaned = extractSheetId(newId);
      if (typeof window !== "undefined") {
        if (cleaned) {
          localStorage.setItem(STORAGE_KEYS.SHEET_ID, cleaned);
        } else {
          localStorage.removeItem(STORAGE_KEYS.SHEET_ID);
        }
      }
      setSheetIdState(cleaned);
      loadProjects(cleaned);
    },
    [loadProjects]
  );

  const addLocal = useCallback(
    (project: Project) => {
      saveLocalCaseStudy(project);
      loadProjects();
    },
    [loadProjects]
  );

  const removeLocal = useCallback(
    (slug: string) => {
      removeLocalCaseStudy(slug);
      loadProjects();
    },
    [loadProjects]
  );

  // Combine static and dynamic projects (preventing duplicate slugs)
  const allProjectsMap = new Map<string, Project>();
  staticProjects.forEach((p) => allProjectsMap.set(p.slug, p));
  dynamicProjects.forEach((p) => allProjectsMap.set(p.slug, p));

  const allProjects = Array.from(allProjectsMap.values());

  return {
    allProjects,
    staticProjects,
    dynamicProjects,
    sheetId,
    setSheetId: updateSheetId,
    isLoading,
    error,
    refresh: () => loadProjects(),
    addLocalCaseStudy: addLocal,
    removeLocalCaseStudy: removeLocal,
  };
}
