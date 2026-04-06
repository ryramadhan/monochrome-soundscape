const LISTEN_LINKS = {
  instagram: "https://www.instagram.com/ikrvell/",
  spotify: "https://open.spotify.com/user/ktjcs82o2sm1btg5l9lnm6gzt",
} as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 pt-10 text-center text-[11px] text-neutral-600">
      <p className="font-light tracking-wide">
        © {new Date().getFullYear()} — ikrvell
      </p>
      <nav
        className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-neutral-500"
        aria-label="Tautan Instagram dan Spotify"
      >
        <a
          href={LISTEN_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-neutral-400"
        >
          Instagram
        </a>
        <span className="text-neutral-700" aria-hidden>
          ·
        </span>
        <a
          href={LISTEN_LINKS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-neutral-400"
        >
          Spotify
        </a>
      </nav>
    </footer>
  );
}
