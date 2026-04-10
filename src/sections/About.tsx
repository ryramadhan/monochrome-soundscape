import { motion } from "framer-motion";
import { sectionMotion } from "../lib/animations";
import profileSrc from "../assets/profile.jpg";

export function About() {
  return (
    <motion.section
      id="about"
      className="mt-28 grid gap-12 border-t border-white/5 pt-20 md:grid-cols-12 md:gap-16"
      {...sectionMotion}
    >
      <div className="md:col-span-5">
        <div className="overflow-hidden rounded-sm border border-white/10 bg-neutral-900/40">
          <img
            src={profileSrc}
            alt="Portrait hitam putih ikrvell, pose tenang, komposisi vertikal monokrom"
            className="aspect-[4/5] w-full object-cover grayscale contrast-[1.05]"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-neutral-600 md:text-left">
          Portrait — monochrome mood
        </p>
      </div>
      <div className="flex flex-col justify-center md:col-span-7">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          About
        </h2>
        <p className="text-base font-light leading-[1.8] text-neutral-300">
          sebuah ruang di antara ide, irama, dan bentuk—di mana kesederhanaan
          tetap punya kedalaman. aku percaya pada garis tipis: disiplin dan
          daya cipta, sunyi yang intens. bukan pamer pencapaian; hanya
          nuansa yang elegan, setia pada estetika, dan tegas dalam ketenangan.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-neutral-500">
          mendengarkan musik adalah hobi yang sangat aku nikmati—dari
          susunan lagu sampai kedalaman lirik—tanpa harus memusatkan semua
          perhatian pada satu genre. di situs ini musik tetap latar yang
          tidak mengambil alih narasi; visual monokrom mempertahankan fokus
          pada karakter dan mood, bukan pada riuhnya warna.
        </p>
      </div>
    </motion.section>
  );
}
