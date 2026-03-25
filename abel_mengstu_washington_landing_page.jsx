export default function AbelMengstuLandingPage() {
  const focusAreas = [
    {
      title: "Technology Solutions",
      text: "Practical digital systems, websites, and operational tools designed to solve real problems.",
      icon: "💻",
    },
    {
      title: "Business Innovation",
      text: "Ideas and ventures shaped around useful services, sustainable growth, and community impact.",
      icon: "📈",
    },
    {
      title: "Community Impact",
      text: "A long-term vision for building technology that connects people, services, and opportunity.",
      icon: "🌍",
    },
  ];

  const highlights = [
    "IT support and technical problem solving",
    "Digital systems for service-based businesses",
    "Early-stage software and platform concepts",
    "Professional, business, and community-centered innovation",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_28%),linear-gradient(180deg,#06121f_0%,#0b1c2d_45%,#08131f_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <header className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-6">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3 shadow-2xl">
            <div>
              <p className="text-sm tracking-[0.25em] uppercase text-sky-200/90">Abel Mengstu</p>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#focus" className="hover:text-white transition">Focus Areas</a>
              <a href="#vision" className="hover:text-white transition">Vision</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>
          </div>
        </header>

        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20 md:pt-16 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                Building practical technology with purpose
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-3xl">
                A modern digital presence inspired by
                <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
                  Washington strength and vision.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-8">
                I am building a path at the intersection of technology, business, and impact — creating practical solutions, professional services, and future-focused ideas while keeping deeper project details private and protected.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#focus"
                  className="rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-sky-500/20 transition hover:scale-[1.02]"
                >
                  Explore My Focus
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-cyan-300/10 to-emerald-400/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl shadow-2xl">
                <div className="rounded-[1.6rem] overflow-hidden border border-white/10 bg-slate-900">
                  <div className="relative h-[520px] w-full">
                    <img
                      src="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1200&q=80"
                      alt="Washington mountain and evergreen landscape"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/35 to-transparent" />
                    <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                      <div className="rounded-2xl border border-white/20 bg-slate-950/45 px-4 py-3 backdrop-blur-md max-w-[220px]">
                        <p className="text-xs uppercase tracking-[0.22em] text-sky-200">Washington Inspired</p>
                        <p className="mt-2 text-sm text-slate-100 leading-6">
                          Evergreen energy, mountain calm, water tones, and a clean modern feel.
                        </p>
                      </div>
                      <div className="rounded-full border border-white/20 bg-slate-950/45 px-4 py-2 backdrop-blur-md text-sm text-slate-100">
                        Seattle • Innovation • Vision
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/15 bg-slate-950/45 p-4 backdrop-blur-md">
                          <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Approach</p>
                          <p className="mt-2 text-sm text-slate-100 leading-6">
                            Professional, thoughtful, and designed for long-term growth.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/15 bg-slate-950/45 p-4 backdrop-blur-md">
                          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Focus</p>
                          <p className="mt-2 text-sm text-slate-100 leading-6">
                            Broad public positioning with protected private project depth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="about" className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md shadow-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200">About</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">A quiet, credible, and future-facing public profile.</h2>
            <p className="mt-6 text-slate-300 leading-8 text-base md:text-lg">
              This landing page is designed to present your identity in a strong and polished way without exposing the details of your ongoing ideas. It positions you as a builder, problem solver, and entrepreneur with a long-term vision grounded in technology, service, and meaningful growth.
            </p>
            <p className="mt-5 text-slate-400 leading-8">
              Instead of revealing sensitive project details, the page communicates your direction through clean messaging, premium visuals, and carefully framed focus areas.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/10 via-white/5 to-emerald-400/10 p-8 md:p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-200">Style Notes</p>
            <div className="mt-6 space-y-4 text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">Evergreen and deep-water tones inspired by Washington</div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">Large scenic imagery for a premium first impression</div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">Modern glass cards and clean typography</div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">Strategic wording that keeps projects high-level</div>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="max-w-7xl mx-auto px-6 md:px-10 py-4 pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Focus Areas</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">High-level positioning that stays professional and protected.</h2>
          </div>
          <p className="max-w-xl text-slate-400 leading-7">
            These sections hint at your strengths and interests without giving away sensitive workflows, technical plans, or business strategy.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-[1.7rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md shadow-lg transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="text-3xl">{area.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-white">{area.title}</h3>
              <p className="mt-4 text-slate-300 leading-7">{area.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="vision" className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.10),rgba(16,185,129,0.10),rgba(255,255,255,0.03))] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute left-10 bottom-0 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200">Vision</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Building a future rooted in technology, service, and meaningful impact.
            </h2>
            <p className="mt-6 text-base md:text-lg leading-8 text-slate-300">
              This site is meant to create confidence, curiosity, and connection. It introduces your direction clearly, presents a strong visual identity, and leaves room for serious conversations to happen privately.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-stretch">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md shadow-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-200">Contact</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Let’s connect professionally.</h2>
            <p className="mt-6 text-slate-300 leading-8">
              Whether you are interested in collaboration, technology solutions, consulting, or future opportunities, this page creates a clean way for people to reach you without exposing more than you want to share publicly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 px-5 py-4 text-slate-200">Email: yourname@example.com</div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 px-5 py-4 text-slate-200">Location: Washington, USA</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 md:p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Closing Statement</p>
            <p className="mt-6 text-2xl font-semibold leading-10 text-white">
              Building practical technology, strong ideas, and a future with purpose.
            </p>
            <p className="mt-6 text-slate-400 leading-8">
              Designed to feel personal, professional, and ambitious — with the calm confidence of the Pacific Northwest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
