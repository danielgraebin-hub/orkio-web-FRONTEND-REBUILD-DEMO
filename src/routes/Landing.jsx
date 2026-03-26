import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, getUser, isAdmin } from "../lib/auth.js";
import PublicChatWidget from "../ui/PublicChatWidget.jsx";
import Footer from "../ui/Footer.jsx";

const floatingStyle = {
  animation: "orkioFloat 6s ease-in-out infinite",
};

export default function Landing() {
  const nav = useNavigate();
  const token = getToken();
  const user = getUser();

  const isLogged = !!token;
  const userIsAdmin = isLogged && isAdmin(user);

  return (
    <div className="min-h-screen bg-[#070910] text-white">
      <style>{`
        @keyframes orkioFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes orkioPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(55,197,255,0.18), 0 0 24px rgba(55,197,255,0.16); }
          50% { box-shadow: 0 0 0 14px rgba(55,197,255,0), 0 0 42px rgba(55,197,255,0.26); }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_10%,rgba(125,107,255,0.18),transparent_60%),radial-gradient(900px_600px_at_85%_15%,rgba(55,197,255,0.14),transparent_60%),linear-gradient(180deg,#070910,#0b0f14_40%,#070910)]" />
      </div>

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
              className="h-10 w-auto object-contain"
            />
            <div className="hidden text-sm text-white/70 sm:block">Where Intelligence Finds Harmony.</div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            <a className="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white" href="#what">
              What
            </a>
            <a className="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white" href="#how">
              How it works
            </a>
            <a className="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white" href="#security">
              Security
            </a>
            {isLogged ? (
              <>
                <button
                  onClick={() => nav("/app")}
                  className="ml-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                >
                  Open Console
                </button>
                {userIsAdmin ? (
                  <button
                    onClick={() => nav("/admin")}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                  >
                    Admin
                  </button>
                ) : null}
              </>
            ) : (
              <>
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
              </>
            )}
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F6C453]">
              Early access • Premium intelligence layer
            </div>

            <h1 className="text-5xl font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Meet the intelligence layer designed to connect
              <span className="block bg-[linear-gradient(135deg,#37C5FF,#F6C453)] bg-clip-text text-transparent">
                people, projects and decisions.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Orkio is an orchestrated intelligence platform built for leaders who want clarity,
              structure, and trusted execution — without losing speed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => nav(isLogged ? "/app" : "/auth")}
                className="rounded-2xl bg-[linear-gradient(135deg,#37C5FF,#7D6BFF)] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#0B0F14] shadow-[0_18px_40px_rgba(55,197,255,0.22)] transition hover:-translate-y-0.5"
              >
                {isLogged ? "Open Orkio" : "Enter Orkio"}
              </button>
              <a
                href="#what"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/90 hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_50%_20%,rgba(55,197,255,0.22),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(125,107,255,0.18),transparent_30%)] blur-2xl" />
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <div className="mx-auto flex max-w-sm flex-col items-center text-center" style={floatingStyle}>
                <img
                  src="/Logo Orkio_V2_Transparente.png"
                  alt="Orkio"
                  className="h-28 w-auto object-contain"
                />
                <div className="mt-4 text-sm text-white/70">Where Intelligence Finds Harmony.</div>
                <div className="mt-6 w-full rounded-2xl border border-white/10 bg-[#0B0F14]/70 p-4 text-left text-sm leading-7 text-white/80">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#37C5FF]">Suggested first prompt</div>
                  <div className="mt-2">
                    What is the clearest next move to structure my company, priorities and decision flow?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what" className="mx-auto max-w-6xl px-4 pb-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6C453]">What it is</div>
              <h3 className="mt-3 text-2xl font-bold text-white">A strategic operating layer</h3>
              <p className="mt-3 text-base leading-7 text-white/72">
                Orkio was built to give leaders an intelligence environment where context, structure and decision quality come first.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6C453]">How it helps</div>
              <h3 className="mt-3 text-2xl font-bold text-white">Less noise. More direction.</h3>
              <p className="mt-3 text-base leading-7 text-white/72">
                Use Orkio to organize thinking, accelerate synthesis and move from scattered inputs to coherent next actions.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6C453]">Why it matters</div>
              <h3 className="mt-3 text-2xl font-bold text-white">Intelligence with accountability</h3>
              <p className="mt-3 text-base leading-7 text-white/72">
                Every strategic environment needs more than answers. It needs confidence, traceability and coherent communication.
              </p>
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#37C5FF]">01</div>
                <h3 className="mt-3 text-xl font-bold text-white">Capture context</h3>
                <p className="mt-3 text-white/72">Bring conversations, priorities and business signals into one structured environment.</p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#37C5FF]">02</div>
                <h3 className="mt-3 text-xl font-bold text-white">Orchestrate intelligence</h3>
                <p className="mt-3 text-white/72">Coordinate agent reasoning, synthesis and strategic support around a controlled workflow.</p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#37C5FF]">03</div>
                <h3 className="mt-3 text-xl font-bold text-white">Move with clarity</h3>
                <p className="mt-3 text-white/72">Turn ambiguity into direction, decisions and execution-ready next steps.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6C453]">Security and governance</div>
                <h3 className="mt-3 text-3xl font-bold text-white">Built for trusted environments.</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  Orkio is designed for controlled access, auditable flows and enterprise-grade reasoning contexts.
                  The goal is not just intelligence — it is strategic intelligence you can actually trust.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#0B0F14]/70 p-6">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#37C5FF]">Core principles</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80">
                  <li>• Structured access and guided onboarding</li>
                  <li>• Controlled interaction design</li>
                  <li>• Clear console pathways</li>
                  <li>• Premium-first communication and support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(55,197,255,0.10),rgba(125,107,255,0.10))] p-8 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#F6C453]">Ready to explore?</div>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white">
                Enter the Orkio environment and experience a new decision layer.
              </h3>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => nav(isLogged ? "/app" : "/auth")}
                  className="rounded-2xl bg-[linear-gradient(135deg,#37C5FF,#7D6BFF)] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#0B0F14] shadow-[0_18px_40px_rgba(55,197,255,0.22)]"
                >
                  {isLogged ? "Open console" : "Request access"}
                </button>
                <Link
                  to="/signup"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/90 hover:bg-white/10"
                >
                  Quick signup
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicChatWidget />
      <Footer />
    </div>
  );
}
