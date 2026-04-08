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
    <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 shadow-lg shadow-black/40">
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
