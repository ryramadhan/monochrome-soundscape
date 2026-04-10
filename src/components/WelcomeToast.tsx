import { useState, useEffect } from "react";

export function WelcomeToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("ikrvell-welcome-seen");
    if (!hasSeen) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("ikrvell-welcome-seen", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center gap-3 rounded-md border border-white/10 bg-neutral-900/90 px-4 py-3 shadow-md shadow-black/30 backdrop-blur-sm">
        <svg className="h-4 w-4 shrink-0 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <p className="text-xs leading-relaxed text-neutral-400">
          disarankan dibuka saat suasana sudah hening, biar detail kecilnya terasa.
        </p>
        <button
          onClick={handleClose}
          className="ml-1 shrink-0 text-neutral-600 transition hover:text-neutral-400"
          aria-label="Tutup"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
