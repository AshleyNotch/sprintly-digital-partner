import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.webp";
import {
  ArrowRight,
  Check,
  X,
  Globe,
  Wrench,
  Rocket,
  PenTool,
  LayoutGrid,
  Sparkles,
  Compass,
  Calendar,
  Mail,
  User,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const BOOK_URL = "#book";
const INCLUDED_URL = "#included";

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-[var(--hairline)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-lg bg-[var(--surface-deep)] grid place-items-center text-primary-foreground text-sm font-semibold">
            S
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Sprrintly
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--ink-soft)]">
          <a href="#included" className="hover:text-foreground transition">What's included</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#fit" className="hover:text-foreground transition">Who it's for</a>
        </nav>
        <a
          href={BOOK_URL}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Book a fit call <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white bg-cover bg-center min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >

      {/* Inner nav */}
      <div className="relative mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 pt-6">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-lg bg-white/10 grid place-items-center text-white text-sm font-semibold backdrop-blur">
            S
          </span>
          <span className="text-lg font-semibold tracking-tight">Sprrintly</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#included" className="hover:text-white transition">What's included</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#fit" className="hover:text-white transition">Who it's for</a>
        </nav>
        <a
          href={BOOK_URL}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
        >
          Book a call <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Hero content */}
      <div className="relative mx-auto w-full max-w-5xl px-6 md:px-10 py-16 flex-1 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs md:text-sm text-white/80">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Welcome to Sprrintly</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl md:text-6xl lg:text-[68px] font-semibold tracking-tight leading-[1.05]">
          For founders who are great at the business, but don't have time for the internet.
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
          Sprrintly is your monthly digital partner. I help owner-led businesses improve their
          website, sharpen their online presence, build better funnels, and keep the important
          digital work moving — without you having to hire a full team.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={BOOK_URL}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_30px_oklch(0.5_0.22_290_/_0.45)] transition hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 290), oklch(0.45 0.20 270))",
            }}
          >
            Book a fit call <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={INCLUDED_URL}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            See what's included
          </a>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section className="border-y border-[var(--hairline)] bg-card">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-base md:text-lg text-[var(--ink-soft)] leading-relaxed max-w-4xl">
          You don't need a big in-house team to keep your business moving online. A monthly retainer
          gives you ongoing strategy and execution in one place — with predictable cost and less
          management overhead than hiring multiple freelancers or employees.
        </p>
      </div>
    </section>
  );
}

function Problem() {
  const points = [
    "Your website never gets properly updated.",
    "Marketing ideas stay stuck in WhatsApp chats and voice notes.",
    "Nobody owns the landing pages, funnels, or follow-through.",
    "Hiring a full-time team is too expensive, and managing several freelancers is a headache.",
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium">The problem</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Running the business is already your full-time job.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg text-[var(--ink-soft)] leading-relaxed">
            Most owners don't need "more ideas." They need someone reliable to take care of the
            website, digital fixes, campaign assets, landing pages, and the many online tasks that
            keep piling up.
          </p>
          <p className="mt-6 text-base text-[var(--ink-soft)]">The problem is usually not effort. It's that:</p>
          <ul className="mt-6 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-base leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="bg-[var(--surface-deep)] text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium">The solution</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
          That's where Sprrintly comes in.
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-10 max-w-5xl">
          <p className="text-lg text-primary-foreground/75 leading-relaxed">
            Sprrintly is a productized monthly service for owner-led businesses that need one
            trusted person to handle the online side of growth. You get strategic direction,
            hands-on execution, and steady monthly progress — all under one simple subscription.
          </p>
          <p className="text-lg text-primary-foreground/75 leading-relaxed">
            I'm not here to give you a slide deck full of advice and disappear. I help you decide
            what matters, then I help you ship it.
          </p>
        </div>
      </div>
    </section>
  );
}

function Included() {
  const items = [
    { icon: Globe, title: "Website updates", desc: "Fixes, improvements, and ongoing care for the site you already have." },
    { icon: LayoutGrid, title: "New pages", desc: "Pages for offers, campaigns, and services — built fast and clean." },
    { icon: Rocket, title: "Landing pages & funnels", desc: "Simple lead funnels that actually convert, not just look nice." },
    { icon: PenTool, title: "Campaign creatives", desc: "Social and campaign assets when a launch or push needs them." },
    { icon: Sparkles, title: "Messaging & offers", desc: "Refining how you talk about what you do, so it lands clearly." },
    { icon: Wrench, title: "Tools & automations", desc: "Light dashboards, internal tools, and small automations." },
    { icon: Compass, title: "Monthly direction", desc: "Guidance on what to prioritize next — so progress compounds." },
  ];
  return (
    <section id="included" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium">What's included</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
          What I take off your plate
        </h2>
        <p className="mt-5 text-lg text-[var(--ink-soft)] leading-relaxed">
          Each month, I help with the digital work that keeps your business moving. Designed as an
          ongoing retainer — consistent support tends to work better than disconnected one-offs.
        </p>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-[var(--hairline)] bg-card p-6 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition"
          >
            <div className="h-10 w-10 rounded-xl bg-[var(--surface-warm)] grid place-items-center">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "We pick the priority",
      desc: "At the start of each month, we decide what matters most right now — more leads, a better website, a cleaner funnel, a new offer page, or fixing digital bottlenecks.",
    },
    {
      n: "02",
      title: "I handle the execution",
      desc: "I work through the tasks tied to that priority, so progress actually happens instead of sitting in your notes app.",
    },
    {
      n: "03",
      title: "You stay focused on the business",
      desc: "You don't need to manage a designer, developer, marketer, and strategist separately. You get one partner who keeps things moving.",
    },
  ];
  return (
    <section id="how" className="bg-card border-y border-[var(--hairline)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium">How it works</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Simple, calm, and consistent.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-[var(--hairline)] bg-background p-8">
              <div className="text-sm font-mono text-accent">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-base text-[var(--ink-soft)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitFor() {
  const goodFit = [
    "You run a real business but don't have an in-house digital team.",
    "You're doing well through referrals, reputation, or offline operations — but your online presence is behind.",
    "You want one reliable person to help with website, growth, and digital execution.",
    "You prefer simple communication and practical progress over agency jargon.",
  ];
  const notFit = [
    "You need a full app or large custom software build.",
    "You want unlimited requests with no prioritization.",
    "You need a full paid ads team, SEO department, or 24/7 support.",
    "You're looking for a traditional agency with lots of layers and meetings.",
  ];
  return (
    <section id="fit" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-[var(--hairline)] bg-card p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium">Who it's for</p>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Built for owner-led businesses
          </h3>
          <ul className="mt-6 space-y-4">
            {goodFit.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-accent/15 text-accent grid place-items-center flex-shrink-0">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-base text-foreground leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-[var(--hairline)] bg-[var(--surface-warm)] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)] font-medium">
            Who it's not for
          </p>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Probably not for you if…
          </h3>
          <ul className="mt-6 space-y-4">
            {notFit.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-foreground/5 text-[var(--ink-soft)] grid place-items-center flex-shrink-0">
                  <X className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-base text-[var(--ink-soft)] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Monthly Partner",
      best: "Businesses that want flexibility",
      price: "$1,495",
      cadence: "/month",
      commit: "Month to month",
      featured: false,
    },
    {
      name: "Quarterly Partner",
      best: "Businesses serious about consistent progress",
      price: "$1,195",
      cadence: "/month",
      commit: "3 months, billed upfront",
      featured: true,
    },
  ];
  const features = [
    "Website updates & improvements",
    "Landing pages & lead funnels",
    "Campaign creatives when needed",
    "Messaging & offer refinement",
    "Light tools & automations",
    "Monthly direction & priorities",
  ];
  return (
    <section id="pricing" className="bg-card border-y border-[var(--hairline)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium">Pricing</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Simple pricing.
          </h2>
          <p className="mt-5 text-lg text-[var(--ink-soft)]">
            Same service, different level of commitment. Quarterly is for businesses that want to
            give the work enough time to compound.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "relative rounded-3xl p-8 md:p-10 border transition",
                p.featured
                  ? "bg-[var(--surface-deep)] text-primary-foreground border-transparent shadow-[var(--shadow-card)]"
                  : "bg-background text-foreground border-[var(--hairline)]",
              ].join(" ")}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  Recommended
                </span>
              )}
              <h3 className={["text-xl font-semibold", p.featured ? "" : "text-foreground"].join(" ")}>
                {p.name}
              </h3>
              <p
                className={[
                  "mt-1 text-sm",
                  p.featured ? "text-primary-foreground/70" : "text-[var(--ink-soft)]",
                ].join(" ")}
              >
                {p.best}
              </p>
              <div className="mt-8 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">{p.price}</span>
                <span
                  className={[
                    "text-base",
                    p.featured ? "text-primary-foreground/70" : "text-[var(--ink-soft)]",
                  ].join(" ")}
                >
                  {p.cadence}
                </span>
              </div>
              <p
                className={[
                  "mt-2 text-sm",
                  p.featured ? "text-primary-foreground/70" : "text-[var(--ink-soft)]",
                ].join(" ")}
              >
                {p.commit}
              </p>
              <a
                href={BOOK_URL}
                className={[
                  "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition",
                  p.featured
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90",
                ].join(" ")}
              >
                Book a fit call <ArrowRight className="h-4 w-4" />
              </a>
              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li
                    key={f}
                    className={[
                      "flex items-start gap-3 text-sm",
                      p.featured ? "text-primary-foreground/85" : "text-foreground",
                    ].join(" ")}
                  >
                    <Check
                      className={["h-4 w-4 mt-0.5 flex-shrink-0", p.featured ? "text-accent" : "text-accent"].join(" ")}
                      strokeWidth={3}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium">Proof</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            What this looks like in real life.
          </h2>
        </div>
        <div className="md:col-span-8">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight">
            "One long-term client started with a website need and ended up using me across website
            improvements, social content, sales funnel thinking, internal tools, and broader growth
            support."
          </blockquote>
          <p className="mt-6 text-lg text-[var(--ink-soft)] leading-relaxed">
            That's the kind of relationship Sprrintly is built for: not random one-off tasks, but
            consistent help across the digital side of the business. If you're great at running the
            business but tired of the online side constantly falling behind — this is for you.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" className="px-6 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[var(--surface-deep)] text-primary-foreground p-10 md:p-20">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-accent)" }}
        />
        <div className="relative max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            You run the business.
            <br />
            <span className="text-accent">I'll help run the internet side of it.</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/75 leading-relaxed">
            If you want a reliable monthly partner for your website, funnels, digital assets, and
            online growth work — let's talk.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
            >
              <Calendar className="h-4 w-4" /> Book a fit call
            </a>
            <a
              href="mailto:hello@sprrintly.com"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition"
            >
              <Mail className="h-4 w-4" /> hello@sprrintly.com
            </a>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/60">
            I work with a small number of businesses at a time so I can stay hands-on.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-[var(--surface-deep)] grid place-items-center text-primary-foreground text-xs font-semibold">
            S
          </span>
          <span className="text-sm font-medium text-foreground">Sprrintly</span>
        </div>
        <p className="text-sm text-[var(--ink-soft)]">
          © {new Date().getFullYear()} Sprrintly. Your monthly digital partner.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/25">
      
      <main>
        <Hero />
        <Credibility />
        <Problem />
        <Solution />
        <Included />
        <HowItWorks />
        <FitFor />
        <Pricing />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
