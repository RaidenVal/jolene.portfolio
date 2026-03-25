import { useState, useEffect } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const TECH_STACK = [
  { group: 'LANGUAGES', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'BACKEND', items: ['Node.js', 'Express', 'RxJS', 'Knex'] },
  { group: 'DATA & INFRA', items: ['BigQuery', 'MySQL', 'GCP', 'AWS S3', 'K8s'] },
  { group: 'TESTING & TOOLS', items: ['Jest', 'Mocha', 'Artillery', 'Grafana'] },
]

const EXPERIENCE = [
  {
    period: '2024 — present',
    role: 'Software Engineer (Placement)',
    company: 'Holiday Extras',
    team: 'Supply Team',
    description:
      'Maintaining and migrating microservices in a GCP-based architecture. Working on service decommission, Pub/Sub integrations, Prometheus metrics, and cross-service config changes.',
  },
]

const PROJECTS = [
  {
    type: 'fullstack',
    title: 'James Li Portfolio',
    description:
      'Portfolio site for a graphic designer. Serverless backend with JWT auth, Supabase DB, Cloudinary CDN, and Claude API for image analysis and inquiry classification.',
    stack: ['React', 'Vercel', 'Supabase', 'Claude API'],
    url: 'https://raiden-val-github-io.vercel.app',
  },
  {
    type: 'backend',
    title: 'project two',
    description: 'Placeholder — add your next project here.',
    stack: ['TypeScript', 'Node.js'],
    url: '#',
  },
]

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-[#ffffff08]' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm text-[#a78bfa] hover:text-[#c4b5fd] transition-colors"
        >
          // jolene.dev
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          {['about', 'experience', 'projects', 'contact'].map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="text-xs sm:text-sm text-[#64748b] hover:text-[#e2e8f0] transition-colors"
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-28 lg:pt-24 lg:pb-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-start">

        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-sm border border-[#7c3aed]/50 bg-[#7c3aed]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
            <span className="font-mono text-xs text-[#a78bfa]">open to work · 2026</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.15] text-[#e2e8f0] mb-5">
            Backend engineer,<br />
            <span className="font-mono text-[#a78bfa]">full-stack too.</span>
          </h1>

          <p className="text-[#64748b] leading-relaxed text-[15px]">
            I build reliable backend systems and ship full-stack products.
            Currently finishing a placement at a travel tech company in the UK,
            looking for what&apos;s next.
          </p>
        </div>

        {/* Right — code block */}
        <div className="rounded-lg border border-[#1e1e2e] bg-[#0d0d18] overflow-hidden shadow-2xl shadow-black/40">
          <div className="px-5 pt-5 pb-1 font-mono text-xs text-[#4a4a6a]">
            // jolene.config.ts
          </div>
          <div className="px-5 pb-5 pt-3 font-mono text-[13px] leading-7">
            <div>
              <span className="text-[#569cd6]">const </span>
              <span className="text-[#9cdcfe]">me</span>
              <span className="text-[#94a3b8]"> = {'{'}</span>
            </div>
            <div className="pl-5">
              <span className="text-[#9cdcfe]">role</span>
              <span className="text-[#94a3b8]">: </span>
              <span className="text-[#ce9178]">&quot;backend + frontend&quot;</span>
              <span className="text-[#94a3b8]">,</span>
            </div>
            <div className="pl-5">
              <span className="text-[#9cdcfe]">lang</span>
              <span className="text-[#94a3b8]">: [</span>
              <span className="text-[#ce9178]">&quot;TypeScript&quot;</span>
              <span className="text-[#94a3b8]">, </span>
              <span className="text-[#ce9178]">&quot;JS&quot;</span>
              <span className="text-[#94a3b8]">, </span>
              <span className="text-[#ce9178]">&quot;Python&quot;</span>
              <span className="text-[#94a3b8]">],</span>
            </div>
            <div className="pl-5">
              <span className="text-[#9cdcfe]">infra</span>
              <span className="text-[#94a3b8]">: [</span>
              <span className="text-[#ce9178]">&quot;GCP&quot;</span>
              <span className="text-[#94a3b8]">, </span>
              <span className="text-[#ce9178]">&quot;AWS&quot;</span>
              <span className="text-[#94a3b8]">, </span>
              <span className="text-[#ce9178]">&quot;K8s&quot;</span>
              <span className="text-[#94a3b8]">],</span>
            </div>
            <div className="pl-5">
              <span className="text-[#9cdcfe]">openTo</span>
              <span className="text-[#94a3b8]">: </span>
              <span className="text-[#569cd6]">true</span>
              <span className="text-[#94a3b8]">,</span>
            </div>
            <div className="pl-5">
              <span className="text-[#9cdcfe]">location</span>
              <span className="text-[#94a3b8]">: </span>
              <span className="text-[#ce9178]">&quot;UK 🇬🇧&quot;</span>
              <span className="text-[#94a3b8]">,</span>
            </div>
            <div>
              <span className="text-[#94a3b8]">{'}'}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader label="about" />

      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        <p className="text-[#94a3b8] leading-relaxed text-[15px]">
          I&apos;m a software engineer on placement at Holiday Extras in the UK, working
          on the Supply team as part of my Computer Science degree. Day-to-day I
          maintain and migrate microservices in a GCP-based architecture.
        </p>
        <p className="text-[#94a3b8] leading-relaxed text-[15px]">
          My background is backend-first, but I build full-stack — all of my
          personal and university projects include a frontend I designed and built
          myself. I care about the whole product: clean APIs, solid data pipelines,
          and UIs that are actually good to use.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {TECH_STACK.map(({ group, items }) => (
          <div
            key={group}
            className="p-4 rounded-lg border border-[#1e1e2e] bg-[#0d0d18]"
          >
            <p className="font-mono text-[10px] text-[#7c3aed] tracking-widest mb-3">
              {group}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {items.map(item => (
                <span
                  key={item}
                  className="text-[12px] text-[#94a3b8] px-2 py-0.5 rounded border border-[#1e1e2e] bg-[#0a0a0f]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader label="experience" />

      <div className="space-y-10">
        {EXPERIENCE.map(exp => (
          <div key={exp.company} className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-8">
            <div className="md:pt-0.5">
              <p className="font-mono text-xs text-[#64748b]">{exp.period}</p>
            </div>
            <div>
              <h3 className="text-[#e2e8f0] font-medium mb-1">{exp.role}</h3>
              <p className="font-mono text-xs text-[#a78bfa] mb-3">
                {exp.company} · {exp.team}
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const TAG_STYLES = {
  fullstack: 'text-[#4ade80] bg-[#4ade80]/10 border-[#4ade80]/20',
  backend: 'text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20',
}

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader label="projects" />

      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map(project => (
          <a
            key={project.title}
            href={project.url}
            target={project.url !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group block p-5 rounded-lg border border-[#1e1e2e] bg-[#0d0d18] hover:border-[#7c3aed]/30 transition-colors"
          >
            <div className="mb-3">
              <span
                className={`inline-block font-mono text-[11px] px-2 py-0.5 rounded border ${TAG_STYLES[project.type] ?? TAG_STYLES.backend}`}
              >
                {project.type}
              </span>
            </div>
            <h3 className="text-[#e2e8f0] font-medium mb-2">{project.title}</h3>
            <p className="text-sm text-[#64748b] leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map(s => (
                <span
                  key={s}
                  className="font-mono text-[11px] text-[#94a3b8] px-2 py-0.5 rounded border border-[#1e1e2e] bg-[#0a0a0f]"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 pb-32">
      <SectionHeader label="contact" />

      <p className="text-[#94a3b8] leading-relaxed text-[15px] mb-8 max-w-md">
        I&apos;m looking for backend or full-stack roles in the UK. If you&apos;re hiring or just
        want to chat, feel free to reach out.
      </p>

      <div className="flex flex-wrap gap-3">
        <ContactButton href="mailto:hello@jolene.dev" label="email" />
        <ContactButton href="https://github.com/RaidenVal" label="github" />
        <ContactButton href="https://linkedin.com/in/jolene-zou" label="linkedin" />
      </div>
    </section>
  )
}

function ContactButton({ href, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-5 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium rounded-lg transition-colors"
    >
      {label} →
    </a>
  )
}

// ─── Shared ───────────────────────────────────────────────────────────────────

function SectionHeader({ label }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-[10px] text-[#3d3d5c] uppercase tracking-[0.2em] shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#1a1a2e]" />
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e2e8f0]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-[#ffffff05] py-6">
        <p className="text-center font-mono text-[11px] text-[#2d2d4e]">
          // built with react + vite + tailwind
        </p>
      </footer>
    </div>
  )
}
