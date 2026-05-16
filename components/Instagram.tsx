type BeholdPost = {
  id: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  altText?: string;
  prunedCaption?: string;
};

type BeholdFeed = {
  posts?: BeholdPost[];
};

async function fetchFeed(): Promise<BeholdPost[] | null> {
  const feedId = process.env.BEHOLD_FEED_ID;
  if (!feedId) return null;
  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data: BeholdFeed = await res.json();
    return data.posts?.slice(0, 6) ?? null;
  } catch {
    return null;
  }
}

export async function Instagram() {
  const posts = await fetchFeed();

  return (
    <section className="ig-section">
      <div className="container-x">
        <div className="ig-head reveal">
          <div>
            <span className="eyebrow">06 · Encuéntrame en Instagram</span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              @mimentecrece. Cerebro, emociones y bienestar.
            </h2>
            <p className="body" style={{ maxWidth: "44ch", marginTop: 14 }}>
              Contenido educativo semanal sobre salud mental. Más de 1.400
              personas se acompañan aquí.
            </p>
          </div>
          <a
            className="btn btn-ghost"
            href="https://instagram.com/mimentecrece"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Instagram <span className="arrow">↗</span>
          </a>
        </div>

        {posts && posts.length > 0 && (
          <div className="ig-grid reveal">
            {posts.map((p) => {
              const src =
                p.mediaType === "VIDEO"
                  ? p.thumbnailUrl ?? p.mediaUrl
                  : p.mediaUrl;
              const label =
                p.altText ?? p.prunedCaption ?? "Ver en Instagram";
              return (
                <a
                  key={p.id}
                  className="ig-tile ig-tile-img"
                  href={p.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={p.altText ?? ""} loading="lazy" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
