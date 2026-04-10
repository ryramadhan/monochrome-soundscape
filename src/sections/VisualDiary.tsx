import { motion } from "framer-motion";
import { sectionMotion } from "../lib/animations";
import diary1 from "../assets/bulat.jpg";
import diary2 from "../assets/banyak.jpg";
import videoClip1 from "../assets/video_2026-04-10_15-30-27.mp4";
import videoClip2 from "../assets/video_2026-04-10_14-59-25.mp4";

type MediaItem =
  | { type: "image"; src: string; caption: string }
  | { type: "video"; src: string; caption: string };

const media: MediaItem[] = [
  { type: "image", src: diary1, caption: "still — what the mirror holds" },
  { type: "video", src: videoClip1, caption: "pulse — night in motion" },
  { type: "image", src: diary2, caption: "us — faces in the crowd" },
  { type: "video", src: videoClip2, caption: "touch — meeting point" },
];

export function VisualDiary() {
  return (
    <motion.section
      id="diary"
      className="mt-28 border-t border-white/5 pt-20"
      {...sectionMotion}
    >
      <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        Visual Diary
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {media.map((item, index) => (
          <figure
            key={index}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-neutral-900/30 transition hover:border-white/20"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.caption}
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            )}
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 opacity-0 transition duration-500 group-hover:opacity-100">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-300">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-500">
        fragmen waktu yang membeku—dari refleksi di cermin, gerak yang tak pernah
        diam, hadir bersama dalam keramaian, hingga tangan yang saling temukan.
        bukan untuk dipamerkan, tapi untuk diingat.
      </p>
    </motion.section>
  );
}
