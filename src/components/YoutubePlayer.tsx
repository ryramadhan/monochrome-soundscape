import { useState } from "react";

/** YouTube privacy-enhanced embed — dipakai di dalam section Mood (bukan fixed). */
export const YOUTUBE_EMBED_SRC =
  "https://www.youtube.com/embed/J5r3MDJGoaw?si=_-oaITsoOUMD3Cy8";

type YoutubePlayerProps = {
  src?: string;
  title?: string;
};

export function YoutubePlayer({
  src = YOUTUBE_EMBED_SRC,
  title = "YouTube — mood soundscape",
}: YoutubePlayerProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 shadow-lg shadow-black/40">
      <div className="relative aspect-video w-full max-w-3xl">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-bounce rounded-full bg-white/40" />
              <div className="h-2 w-2 animate-bounce rounded-full bg-white/40 [animation-delay:150ms]" />
              <div className="h-2 w-2 animate-bounce rounded-full bg-white/40 [animation-delay:300ms]" />
            </div>
          </div>
        )}
        {!loading && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100 max-sm:opacity-100 max-sm:bg-black/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/30 transition group-hover:scale-110 group-hover:bg-white/20 max-sm:scale-90 max-sm:bg-white/5 max-sm:ring-white/20">
              <svg className="ml-0.5 h-5 w-5 text-white max-sm:text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        <iframe
          title={title}
          src={src}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          onLoad={() => setLoading(false)}
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
