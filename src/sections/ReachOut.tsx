import { useState } from "react";
import { motion } from "framer-motion";
import { sectionMotion } from "../lib/animations";

const LISTEN_LINKS = {
  instagram: "https://www.instagram.com/ikrvell/",
  spotify: "https://open.spotify.com/user/ktjcs82o2sm1btg5l9lnm6gzt",
} as const;

export function ReachOut() {
  const [sent, setSent] = useState(false);

  return (
    <motion.section
      id="reach-out"
      className="mt-28 border-t border-white/5 pt-20"
      {...sectionMotion}
    >
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        Reach Out
      </h2>
      {sent ? (
        <div className="max-w-xl space-y-3">
          <p className="text-sm leading-relaxed text-neutral-300">
            Mantap—pesannya udah ke-record di sini. Thanks for reaching out,
            ya; nanti kita lanjut lewat kontak yang kamu cantumkan.
          </p>
          <p className="text-xs text-neutral-600">
            (Demo lokal: sambungkan ke backend atau layanan formulir saat
            sudah siap.)
          </p>
        </div>
      ) : (
        <form
          className="max-w-xl space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <p className="text-sm leading-relaxed text-neutral-400">
            Sama seperti musik yang dipilih dengan hati-hati,{" "}
            <span className="text-neutral-300">message</span> kamu juga
            boleh datang{" "}
            <span className="text-neutral-300">slow and honest</span>.{" "}
            <span className="text-neutral-300">Reach out</span> kalau ada
            yang ingin disampaikan; aku baca dulu,{" "}
            <span className="text-neutral-300">reply</span> dilanjutkan dari{" "}
            <span className="text-neutral-300">contact</span> yang kamu
            cantumkan.
          </p>
          <p className="text-sm leading-relaxed text-neutral-500">
            Atau DM langsung di{" "}
            <a
              href={LISTEN_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/50"
            >
              Instagram
            </a>
            .
          </p>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-neutral-600"
            >
              Nama
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full border-0 border-b border-neutral-700 bg-transparent py-2 text-neutral-100 outline-none transition placeholder:text-neutral-700 focus:border-white"
              placeholder="Nama kamu"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-neutral-600"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full border-0 border-b border-neutral-700 bg-transparent py-2 text-neutral-100 outline-none transition placeholder:text-neutral-700 focus:border-white"
              placeholder="kamu@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-neutral-600"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full resize-none border-0 border-b border-neutral-700 bg-transparent py-2 text-neutral-100 outline-none transition placeholder:text-neutral-700 focus:border-white"
              placeholder="Whatever is on your mind—singkat juga gapapa, yang penting dari kamu."
            />
          </div>
          <button
            type="submit"
            className="group border border-white/25 bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:border-white/60 hover:bg-white/5"
          >
            <span className="transition group-hover:text-white">Kirim</span>
          </button>
        </form>
      )}
    </motion.section>
  );
}
