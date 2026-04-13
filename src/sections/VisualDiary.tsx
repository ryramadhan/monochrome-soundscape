
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { sectionMotion } from "../lib/animations";
import diary1 from "../assets/bulat.jpg";
import diary2 from "../assets/banyak.jpg";
import videoClip1 from "../assets/video_2026-04-10_16-13-44.mp4";
import videoClip2 from "../assets/video_2026-04-11_00-18-16.mp4";
import plainJaneAudio from "../assets/FERG - Plain Jane REMIX (Official Audio) ft (mp3cut.net).mp3";

type MediaItem =
  | { type: "image"; src: string; caption: string }
  | { type: "video"; src: string; caption: string };

const media: MediaItem[] = [
  { type: "image", src: diary1, caption: "still — what the mirror holds" },
  { type: "video", src: videoClip1, caption: "pulse — night in motion" },
  { type: "image", src: diary2, caption: "us — faces in the crowd" },
  { type: "video", src: videoClip2, caption: "drift — night moves" },
];

function AudioPlayer({ src, title }: { src: string; title?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => { });
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <button
      onClick={togglePlay}
      className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-600 transition hover:text-neutral-400"
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        {isPlaying ? (
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        ) : (
          <path d="M8 5v14l11-7z" />
        )}
      </svg>
      <span>{title || "Play"}</span>
      <audio ref={audioRef} src={src} preload="metadata" onEnded={handleEnded} />
    </button>
  );
}

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
    />
  );
}

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
              <VideoPlayer src={item.src} />
            )}
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 opacity-0 transition duration-500 group-hover:opacity-100">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-300">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6">
        <AudioPlayer src={plainJaneAudio} title="♪ Plain Jane — click to play" />
      </div>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-500">
        fragmen waktu yang membeku—dari ruang-ruang yang pernah kami isi dengan
        suara terlalu keras, asap yang jadi saksi bisu, malam yang sering kami
        lewati tanpa arah, hingga jalanan yang menyimpan cerita yang tak selalu
        bisa kami banggakan. bukan untuk dipamerkan, tapi untuk diingat, karena
        dulu kami hidup seolah tak ada yang perlu dijaga, dan justru di situlah
        semuanya terasa nyata. — 2022
      </p>
    </motion.section>
  );
}
