import { useState } from "react";

function Navbar({ navItems, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:px-5">
          <a href="#hero" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-teal-300 font-mono text-sm font-bold text-slate-950">
              DS
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-slate-300 sm:inline-flex">
              Deepanshu Sharma
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <nav
            className="mt-3 grid gap-2 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-3 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl md:hidden"
            aria-label="Mobile primary"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
