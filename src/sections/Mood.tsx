import { motion } from "framer-motion";
import { sectionMotion } from "../lib/animations";
import { YoutubePlayer } from "../components/YoutubePlayer";

const LISTEN_LINKS = {
  instagram: "https://www.instagram.com/ikrvell/",
  spotify: "https://open.spotify.com/user/ktjcs82o2sm1btg5l9lnm6gzt",
} as const;

export function Mood() {
  return (
    <motion.section
      id="mood"
      className="mt-28 border-t border-white/5 pt-20"
      {...sectionMotion}
    >
      <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        Mood / Expression
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <figure className="group relative overflow-hidden border border-white/10 bg-neutral-900/30 p-10 transition hover:border-white/20">
          <blockquote className="text-lg font-light leading-relaxed text-neutral-200 sm:text-xl">
            &ldquo;kedalaman tidak harus berisik. kadang ia hanya berdiri di
            sana—rapi, sunyi, dan tegas dalam batasnya sendiri.&rdquo;
          </blockquote>
          <figcaption className="mt-8 text-[11px] uppercase tracking-[0.2em] text-neutral-600 transition group-hover:text-neutral-500">
            — internal note on form &amp; restraint
          </figcaption>
        </figure>
        <div className="group flex min-h-[280px] flex-col justify-between border border-white/10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.07),transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(255,255,255,0.04),transparent_50%)] p-10 transition hover:border-white/20">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-600">
              Visual tone
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              ruang negatif sebagai bahasa. kontras lembut antara hitam
              pekat dan putih yang tidak menuntut perhatian—cukup hadir.
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            <span className="h-1 flex-1 rounded-full bg-white/15 transition group-hover:bg-white/25" />
            <span className="h-1 flex-1 rounded-full bg-white/8" />
            <span className="h-1 w-12 rounded-full bg-white/25" />
          </div>
        </div>

        <div className="border border-white/10 bg-neutral-900/30 p-8 transition hover:border-white/20 md:col-span-2 md:p-10">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Mood
          </p>
          <YoutubePlayer />
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-neutral-600">
            Lanjut dengar &amp; ikuti
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
            <a
              href={LISTEN_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href={LISTEN_LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Spotify
            </a>
          </div>
        </div>

        <figure className="group relative overflow-hidden border border-white/10 bg-neutral-900/25 p-10 transition hover:border-white/20 md:col-span-2">
          <p className="mb-6 text-[11px] uppercase tracking-[0.25em] text-neutral-600">
            Soundscape — fragmen lirik
          </p>
          <blockquote className="max-w-3xl space-y-4 text-base font-light leading-relaxed text-neutral-200 sm:text-lg">
            <p>Is it a crime to be unsure?</p>
            <p className="text-neutral-500">(Let me know, let me know, let me know, let me)</p>
            <p>In time, we&apos;ll find</p>
            <p className="text-neutral-500">(Let me know, let me know, let me know, let me)</p>
            <p>If it&apos;s sustainable</p>
            <p className="text-neutral-500">(Let me know, let me know, let me know, let me)</p>
            <p>You&apos;re pure, you&apos;re kind</p>
            <p className="text-neutral-500">(Let me know, let me know, let me know, let me)</p>
            <p>Mature, divine</p>
            <p className="text-neutral-500">(Let me know, let me know, let me know, let me)</p>
            <p>You might be too good for me, unattainable</p>
            <p className="text-neutral-500">(Let me know, let me know, let me know, let me)</p>
            <p>Maybe we get married one day, but who knows?</p>
          </blockquote>
          <figcaption className="mt-8 text-[11px] uppercase tracking-[0.2em] text-neutral-600 transition group-hover:text-neutral-500">
            — Daniel Caesar, &ldquo;Who Knows&rdquo;
          </figcaption>
          <p className="mt-6 text-sm italic leading-relaxed text-neutral-500">
            lagu ini sering kudengar: ada pelajarannya — tak apa untuk ragu.
            dalam waktu, kita akan temukan jawabnya. mungkin yang terbaik
            memang butuh kesabaran, dan itu cukup menarik untuk ditunggu.
          </p>
        </figure>
      </div>
    </motion.section>
  );
}
