// src/routes/Landing.jsx (CONSOLIDATED FINAL)

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-[#070910] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070910]/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button
            type="button"
            onClick={() => nav("/")}
            className="flex items-center gap-3 rounded-2xl px-2 py-1 text-left"
          >
            <img
              src="/Logo Orkio_V2_Transparente.png"
              alt="Orkio"
              className="h-52 md:h-64 w-auto object-contain"
            />
            <div className="hidden text-sm text-white/70 sm:block">
              Where Intelligence Finds Harmony.
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => nav("/auth?mode=login")}
              className="ml-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Sign in
            </button>

            <button
              onClick={() => nav("/auth")}
              className="rounded-xl bg-[linear-gradient(135deg,#37C5FF,#7D6BFF)] px-4 py-2 text-sm font-extrabold text-[#0B0F14] shadow-[0_14px_34px_rgba(55,197,255,0.22)]"
            >
              Request access
            </button>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-6 pt-24">
        <img
          src="/Logo Orkio_V2_Transparente.png"
          alt="Orkio"
          className="h-64 md:h-80 w-auto object-contain mb-6"
        />

        <h1 className="text-3xl md:text-5xl font-semibold text-white/90">
          Where Intelligence Finds Harmony.
        </h1>
      </main>
    </div>
  );
}
