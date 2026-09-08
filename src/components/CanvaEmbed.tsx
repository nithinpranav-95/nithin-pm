interface CanvaEmbedProps {
  url: string;
  title?: string;
  aspectRatio?: string;
}

export function CanvaEmbed({
  url,
  title = "Canva presentation",
  aspectRatio = "56.25%",
}: CanvaEmbedProps) {
  // Canva share URLs often point to /view or /watch; the embed parameter makes
  // the iframe render the lightweight player. We normalise the input so the
  // user can paste either a regular Canva link or the full embed snippet URL.
  const embedUrl = url.includes("?embed") ? url : `${url.split("?")[0]}?embed`;

  return (
    <div className="mt-5 overflow-hidden border border-paper/15 bg-panel">
      <div
        className="relative w-full"
        style={{ paddingTop: aspectRatio }}
      >
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="fullscreen"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
