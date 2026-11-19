import { normalizeCanvaUrl } from "./case-studies-sync";
import { projects as staticProjects, type Project } from "./projects";

/** One row of the case_studies table in the Case_Study Supabase project. */
export interface SupabaseCaseStudyRow {
  slug: string;
  number?: string | null;
  title: string;
  company?: string | null;
  year?: string | null;
  description?: string | null;
  role?: string | null;
  outcome?: string | null;
  canva_url?: string | null;
  cover_image_url?: string | null;
  context?: string | null;
  approach?: string | null;
  proposed?: string | null;
  how_to_read?: string | null;
  show_on_home?: boolean | null;
  created_at?: string | null;
}

// Public project details for the Case_Study Supabase project. The publishable
// key is safe in client code: it only grants what the row-level policies allow,
// which here is read-only access to case_studies.
export const CASE_STUDIES_SUPABASE_URL = "https://vqscubrkdvyqohhtdpbk.supabase.co";
export const CASE_STUDIES_SUPABASE_KEY = "sb_publishable_yQOzCXp9jkpqWDeseLyV-A_IGXETqnS";

function text(value: string | null | undefined): string {
  return value && value.trim() ? value.trim() : "";
}

function sectionsFromRow(row: SupabaseCaseStudyRow) {
  return [
    { heading: "Context", body: text(row.context) },
    { heading: "Approach", body: text(row.approach) },
    { heading: "What I proposed", body: text(row.proposed) },
    { heading: "How to read the deck", body: text(row.how_to_read) },
  ].filter((section) => section.body);
}

/**
 * Builds a Project from a row. When the slug matches a built-in case study,
 * the row is layered on top of it, so blank columns keep the existing value
 * instead of wiping it. That makes "paste a Canva link" a valid whole edit.
 */
export function mapRowToProject(row: SupabaseCaseStudyRow, index: number): Project {
  const base = staticProjects.find((project) => project.slug === row.slug);
  const sections = sectionsFromRow(row);
  const title = text(row.title) || base?.title || row.slug;

  return {
    slug: row.slug,
    number: text(row.number) || base?.number || String(index + 1).padStart(2, "0"),
    title,
    company: text(row.company) || base?.company || title,
    year: text(row.year) || base?.year || new Date().getFullYear().toString(),
    image: text(row.cover_image_url) || base?.image || "",
    description:
      text(row.description) || base?.description || "Case study deck and walkthrough.",
    role: (text(row.role) || base?.role || "PRODUCT MANAGER").toUpperCase(),
    outcome: (text(row.outcome) || base?.outcome || "CASE STUDY").toUpperCase(),
    canvaUrl: normalizeCanvaUrl(text(row.canva_url)) || base?.canvaUrl || "",
    hideOnHome: base?.hideOnHome,
    showOnHome:
      typeof row.show_on_home === "boolean" ? row.show_on_home : base?.showOnHome,
    sections: sections.length ? sections : (base?.sections ?? []),
  };
}

/**
 * Reads case studies from the Case_Study Supabase project. Returns an empty
 * list on any failure so the site still renders its static case studies.
 */
export async function fetchSupabaseCaseStudies(): Promise<Project[]> {
  if (!CASE_STUDIES_SUPABASE_KEY || CASE_STUDIES_SUPABASE_KEY.startsWith("PASTE_")) {
    return [];
  }

  const endpoint = `${CASE_STUDIES_SUPABASE_URL}/rest/v1/case_studies?select=*&order=created_at.asc`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        apikey: CASE_STUDIES_SUPABASE_KEY,
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      console.warn(`Failed to fetch Supabase case studies (${response.status})`);
      return [];
    }
    const rows = (await response.json()) as SupabaseCaseStudyRow[];
    if (!Array.isArray(rows)) return [];
    return rows.filter((row) => row?.slug && row?.title).map(mapRowToProject);
  } catch (err) {
    console.error("Error fetching Supabase case studies:", err);
    return [];
  }
}
