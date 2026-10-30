import { useState, useId } from "react";
import {
  ExternalLink,
  Copy,
  Check,
  Plus,
  RefreshCw,
  FileSpreadsheet,
  Sparkles,
  Eye,
  Sliders,
  Trash2,
} from "lucide-react";
import {
  normalizeCanvaUrl,
  useAllCaseStudies,
  type Project,
} from "@/lib/case-studies-sync";

interface AddCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddCaseStudyModal({ isOpen, onClose }: AddCaseStudyModalProps) {
  const {
    sheetId,
    setSheetId,
    refresh,
    isLoading,
    addLocalCaseStudy,
    dynamicProjects,
    removeLocalCaseStudy,
    allProjects,
  } = useAllCaseStudies();

  const [activeTab, setActiveTab] = useState<"paste" | "settings" | "manage">(
    "paste"
  );
  const [canvaInput, setCanvaInput] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("LEAD PM");
  const [copied, setCopied] = useState(false);
  const [sheetInput, setSheetInput] = useState(sheetId);
  const [sheetSaved, setSheetSaved] = useState(false);
  const [previewActive, setPreviewActive] = useState(false);

  const canvaEmbedUrl = normalizeCanvaUrl(canvaInput);

  if (!isOpen) return null;

  const handleCopyRowAndOpenSheet = () => {
    const finalTitle = title.trim() || "New Case Study";
    const finalCompany = company.trim() || finalTitle.split("—")[0].trim();
    const finalDesc =
      description.trim() || "Interactive case study presentation and teardown.";
    const currentYear = new Date().getFullYear().toString();

    // CSV line: Title, Company, CanvaUrl, Description, Year, Role, Outcome
    const row = `"${finalTitle.replace(/"/g, '""')}","${finalCompany.replace(/"/g, '""')}","${canvaEmbedUrl}","${finalDesc.replace(/"/g, '""')}","${currentYear}","${role}","CASE STUDY"`;

    navigator.clipboard.writeText(row);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    if (sheetId) {
      window.open(
        `https://docs.google.com/spreadsheets/d/${sheetId}/edit`,
        "_blank"
      );
    }
  };

  const handleSaveToBrowser = () => {
    if (!canvaEmbedUrl) return;

    const finalTitle = title.trim() || "New Case Study";
    const finalCompany = company.trim() || finalTitle.split("—")[0].trim();
    const finalDesc =
      description.trim() || "Interactive case study presentation and teardown.";
    const currentYear = new Date().getFullYear().toString();
    const nextNum = String(allProjects.length + 1).padStart(2, "0");
    const slugBase = finalTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const slug = slugBase || `case-${nextNum}`;

    const newProject: Project = {
      slug,
      number: nextNum,
      title: finalTitle,
      company: finalCompany,
      year: currentYear,
      image: "",
      description: finalDesc,
      role: role.toUpperCase(),
      outcome: "CASE STUDY",
      canvaUrl: canvaEmbedUrl,
      sections: [
        {
          heading: "Context & Overview",
          body: "Full case study presentation embedded directly from Canva. Review the slides above for the product teardown, workflow analysis, proposed strategy, and metrics.",
        },
      ],
    };

    addLocalCaseStudy(newProject);
    setPreviewActive(true);
  };

  const handleSaveSheetId = () => {
    setSheetId(sheetInput.trim());
    setSheetSaved(true);
    setTimeout(() => setSheetSaved(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-3xl border border-paper/20 bg-ink p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-paper/10 pb-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-signal">
              <Sparkles className="h-3.5 w-3.5" />
              <span>LIVE CLOUD SYNC · CASE STUDIES</span>
            </div>
            <h2 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
              Add Case Study
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-paper/60 transition-colors hover:text-signal"
            aria-label="Close modal"
          >
            CLOSE ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mt-4 flex border-b border-paper/10 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("paste")}
            className={`border-b-2 px-4 py-2 transition-colors ${
              activeTab === "paste"
                ? "border-signal text-signal"
                : "border-transparent text-paper/60 hover:text-paper"
            }`}
          >
            01. PASTE CANVA LINK
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-1.5 border-b-2 px-4 py-2 transition-colors ${
              activeTab === "settings"
                ? "border-signal text-signal"
                : "border-transparent text-paper/60 hover:text-paper"
            }`}
          >
            <FileSpreadsheet className="h-3 w-3" />
            <span>02. GOOGLE SHEET SYNC</span>
            {sheetId && (
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            )}
          </button>
          {dynamicProjects.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab("manage")}
              className={`border-b-2 px-4 py-2 transition-colors ${
                activeTab === "manage"
                  ? "border-signal text-signal"
                  : "border-transparent text-paper/60 hover:text-paper"
              }`}
            >
              03. ACTIVE CUSTOM ({dynamicProjects.length})
            </button>
          )}
        </div>

        {/* Tab 1: Paste Canva Link */}
        {activeTab === "paste" && (
          <div className="mt-6 space-y-5">
            <div>
              <label className="block font-mono text-[11px] text-signal">
                CANVA EMBEDDING LINK OR IFRAME SNIPPET *
              </label>
              <textarea
                rows={2}
                value={canvaInput}
                onChange={(e) => {
                  setCanvaInput(e.target.value);
                  setPreviewActive(false);
                }}
                placeholder="Paste your Canva link or embed code here (e.g. https://www.canva.com/design/DA.../view?embed)"
                className="mt-2 w-full border border-paper/20 bg-panel px-3.5 py-2.5 font-mono text-xs text-paper placeholder-paper/30 transition-colors focus:border-signal focus:outline-none"
              />
              <p className="mt-1 font-mono text-[10px] text-paper/40">
                Supports Canva view links, watch links, embed links, or full &lt;iframe&gt; embed code.
              </p>
            </div>

            {/* Quick Metadata */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-[11px] text-paper/60">
                  CASE STUDY TITLE
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Taxfix — Make Taxes Year Round"
                  className="mt-1.5 w-full border border-paper/20 bg-panel px-3 py-2 font-mono text-xs text-paper placeholder-paper/30 focus:border-signal focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-mono text-[11px] text-paper/60">
                  COMPANY / CLIENT
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Taxfix"
                  className="mt-1.5 w-full border border-paper/20 bg-panel px-3 py-2 font-mono text-xs text-paper placeholder-paper/30 focus:border-signal focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[11px] text-paper/60">
                SHORT DESCRIPTION (OPTIONAL)
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. A product teardown on workflow guardrails and eval frameworks."
                className="mt-1.5 w-full border border-paper/20 bg-panel px-3 py-2 font-mono text-xs text-paper placeholder-paper/30 focus:border-signal focus:outline-none"
              />
            </div>

            {/* Live Canva Preview Frame */}
            {canvaEmbedUrl && (
              <div className="border border-paper/15 bg-panel p-3">
                <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-paper/40">
                  <span className="text-signal">LIVE CANVA PLAYER PREVIEW</span>
                  <span>NORMALIZED URL DETECTED</span>
                </div>
                <div className="relative aspect-video w-full overflow-hidden border border-paper/10 bg-ink">
                  <iframe
                    src={canvaEmbedUrl}
                    title="Live Canva Preview"
                    allow="fullscreen"
                    className="h-full w-full border-0"
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 border-t border-paper/10 pt-4">
              <button
                type="button"
                onClick={handleCopyRowAndOpenSheet}
                disabled={!canvaEmbedUrl}
                className="inline-flex items-center gap-2 border border-signal bg-signal px-5 py-3 font-mono text-[11px] font-medium text-ink transition-all hover:bg-signal/90 disabled:opacity-40"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>
                  {copied
                    ? "COPIED TO CLIPBOARD!"
                    : sheetId
                    ? "COPY ROW & OPEN GOOGLE SHEET ↗"
                    : "COPY ROW FOR GOOGLE SHEET"}
                </span>
              </button>

              <button
                type="button"
                onClick={handleSaveToBrowser}
                disabled={!canvaEmbedUrl}
                className="inline-flex items-center gap-2 border border-paper/25 bg-panel px-5 py-3 font-mono text-[11px] text-paper/85 transition-colors hover:border-signal hover:text-signal disabled:opacity-40"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>SAVE & PREVIEW IN BROWSER</span>
              </button>

              {previewActive && (
                <span className="font-mono text-[11px] text-signal">
                  ✓ Added to site! Close modal to view.
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Google Sheet Connection Settings */}
        {activeTab === "settings" && (
          <div className="mt-6 space-y-6">
            <div className="border border-paper/15 bg-panel p-4">
              <div className="flex items-center gap-2 font-mono text-[11px] text-signal">
                <FileSpreadsheet className="h-4 w-4" />
                <span>HOW GOOGLE SHEET CLOUD SYNC WORKS</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-paper/75">
                Paste your Google Sheet link or ID below. When anyone visits your portfolio,
                the website automatically fetches all rows from your sheet in real time.
                Adding or modifying any Canva link in the Google Sheet immediately updates the website
                without needing any code changes or redeployments!
              </p>
            </div>

            <div>
              <label className="block font-mono text-[11px] text-signal">
                CONNECTED GOOGLE SHEET URL OR ID
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                <input
                  type="text"
                  value={sheetInput}
                  onChange={(e) => setSheetInput(e.target.value)}
                  placeholder="https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFM.../edit"
                  className="min-w-0 flex-1 border border-paper/20 bg-panel px-3.5 py-2.5 font-mono text-xs text-paper placeholder-paper/30 focus:border-signal focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSaveSheetId}
                  className="border border-signal bg-signal px-5 py-2.5 font-mono text-xs font-medium text-ink transition-all hover:bg-signal/90"
                >
                  {sheetSaved ? "SAVED ✓" : "CONNECT SHEET"}
                </button>
              </div>
              <p className="mt-1.5 font-mono text-[10px] text-paper/40">
                Make sure the Google Sheet share setting is set to:{" "}
                <span className="text-paper/80">"Anyone with the link can view"</span>.
              </p>
            </div>

            {/* Step by step guide */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 font-mono text-[11px] text-paper/70">
              <div className="border border-paper/10 bg-panel/50 p-3">
                <span className="block font-semibold text-signal mb-1">01 / HEADERS</span>
                <span>Column A: Title, B: Company, C: Canva Link, D: Description. (Or just Canva link in col A!)</span>
              </div>
              <div className="border border-paper/10 bg-panel/50 p-3">
                <span className="block font-semibold text-signal mb-1">02 / SHARE LINK</span>
                <span>Click Share in Google Sheets → Set to "Anyone with the link can view" → Copy link.</span>
              </div>
              <div className="border border-paper/10 bg-panel/50 p-3">
                <span className="block font-semibold text-signal mb-1">03 / AUTO-SYNC</span>
                <span>Whenever you paste a new Canva link in the sheet, the site updates live!</span>
              </div>
            </div>

            {sheetId && (
              <div className="flex flex-wrap items-center gap-3 border-t border-paper/10 pt-4">
                <a
                  href={`https://docs.google.com/spreadsheets/d/${sheetId}/edit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-paper/25 bg-panel px-4 py-2 font-mono text-xs text-paper/80 transition-colors hover:border-signal hover:text-signal"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>OPEN YOUR SHEET IN GOOGLE DRIVE ↗</span>
                </a>
                <button
                  type="button"
                  onClick={() => refresh()}
                  className="inline-flex items-center gap-1.5 border border-paper/15 px-4 py-2 font-mono text-xs text-paper/60 transition-colors hover:text-signal"
                >
                  <RefreshCw
                    className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`}
                  />
                  <span>SYNC NOW</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Active Custom Case Studies */}
        {activeTab === "manage" && (
          <div className="mt-6 space-y-4">
            <p className="font-mono text-xs text-paper/60">
              Custom case studies currently loaded in this session:
            </p>
            <div className="divide-y divide-paper/10 border border-paper/15 bg-panel">
              {dynamicProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className="flex items-center justify-between p-3.5 font-mono text-xs"
                >
                  <div>
                    <span className="text-signal font-semibold mr-2">
                      #{proj.number}
                    </span>
                    <span className="font-medium">{proj.title}</span>
                    <span className="ml-2 text-paper/40">({proj.company})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`/work/${proj.slug}`}
                      className="text-signal hover:underline"
                    >
                      VIEW →
                    </a>
                    <button
                      type="button"
                      onClick={() => removeLocalCaseStudy(proj.slug)}
                      className="text-paper/40 transition-colors hover:text-signal"
                      title="Remove local project"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
