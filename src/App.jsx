import { useState, useEffect } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const TECH_STACK = [
  { group: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'SQL'] },
  { group: 'FRAMEWORKS', items: ['React', 'Node.js', 'Express', 'Handlebars'] },
  { group: 'TESTING', items: ['Jest', 'Mocha', 'Grafana'] },
  { group: 'TOOLS', items: ['Git', 'GCP', 'Jira', 'VS Code', 'Cursor'] },
  { group: 'DATABASES', items: ['PostgreSQL', 'BigQuery'] },
  { group: 'AI & AUTOMATION', items: ['Claude API', 'MCP', 'Claude Code', 'Prompt Engineering'] },
]

const EXPERIENCE = [
  {
    period: '2025 — present',
    role: 'Software Engineer (Industrial Placement)',
    company: 'Holiday Extras',
    team: 'Supply Team',
    url: 'https://www.holidayextras.co.uk',
    description:
      'Contributed to three production Node.js microservices across the email and booking stack. Onboarded a new B2B partner end-to-end, standardised template rendering and locale handling, and built a Claude Code AI plugin for the internal marketplace as a Hackathon project.',
  },
  {
    period: '2024 — present',
    role: 'MSc Computer Science',
    company: 'University of Kent',
    team: 'School of Computing',
    url: 'https://www.kent.ac.uk/computing',
    description:
      'Dissertation on GamerSwap — a peer-to-peer game exchange platform — covering inclusive UI/UX design, trust mechanisms, and matching algorithm design. Industrial placement year at Holiday Extras (2025–present).',
  },
  {
    period: '2021 — 2022',
    role: 'Project Manager',
    company: 'Garena Online',
    team: 'Blockman Go',
    url: 'https://www.garena.com',
    description:
      'Managed release plans across 5 major and 3 minor versions. Supervised platform migration from Sandbox to Garena, coordinated with 9 overseas operation teams, and improved store ratings to 4.8 regional / 4.5 overall.',
  },
  {
    period: '2021',
    role: 'Project Manager',
    company: 'Tencent',
    team: 'Synced: Off-Planet',
    url: 'https://www.tencent.com',
    description:
      'Managed contracts and collaboration with 30+ domestic and overseas artists. Coordinated 10+ joint tests, ran bilingual meetings, and produced monthly cost analysis reports for outsourcing budget control.',
  },
]

const PROJECTS = [
  {
    type: 'fullstack',
    title: 'Graphic Designer Portfolio',
    description:
      'Portfolio site for a graphic designer. Serverless backend with JWT auth, Supabase DB, and Cloudinary CDN. Integrated Claude API to auto-generate image descriptions for artwork uploads and classify incoming inquiries by type — reducing manual curation work.',
    stack: ['React', 'Vercel', 'Supabase', 'Claude API'],
    url: 'https://raiden-val-github-io.vercel.app',
  },
  {
    type: 'ai',
    title: 'Claude Code Plugins',
    description:
      'Built MCP plugins for the Holiday Extras internal AI developer marketplace as a Hackathon project. The hx-email and hx-rpc plugins let engineers query internal services directly from Claude Code, removing context-switching during development. Both plugins were adopted by the engineering team.',
    stack: ['Claude Code', 'MCP', 'Node.js'],
    url: null,
  },
  {
    type: 'fullstack',
    title: 'GamerSwap',
    description:
      'University group project — a peer-to-peer platform for trading and swapping physical video games. Built the entire frontend and later improved the backend after gaining industry experience on placement. Also wrote my dissertation on it, covering UI/UX, trust mechanisms, and matching algorithm design.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'PHP'],
    url: 'https://final-gamerswap.onrender.com',
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
          {['About', 'Experience', 'Projects', 'Contact'].map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-[#cbd5e1] hover:text-[#e2e8f0] transition-colors"
            >
              {label}
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
      <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-sm border border-[#7c3aed]/50 bg-[#7c3aed]/10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
        <span className="font-mono text-xs text-[#a78bfa]">open to work · 2026</span>
      </div>

      <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] text-[#f8fafc] mb-4">
        Jolene Zou
      </h1>
      <p className="text-3xl lg:text-4xl font-semibold leading-[1.2] text-[#a78bfa]">
        Backend engineer,{' '}
        <span className="font-mono">full-stack too.</span>
      </p>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader label="about" />

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-[#cbd5e1] leading-relaxed text-base">
            I build reliable backend systems and ship full-stack products. Currently
            finishing a placement on the Supply team at Holiday Extras, where I maintain
            and migrate microservices in a GCP-based architecture as part of my
            Computer Science degree.
          </p>
          <p className="text-[#cbd5e1] leading-relaxed text-base">
            I care about the whole product: clean APIs, solid data pipelines, and UIs
            that are actually good to use. Every personal and university project
            includes a frontend I designed and built myself. Looking for what&apos;s next.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {TECH_STACK.map(({ group, items }) => (
            <div
              key={group}
              className="p-4 rounded-lg border border-[#1e1e2e] bg-[#0d0d18]"
            >
              <p className="font-mono text-xs text-[#c4b5fd] tracking-widest mb-3">
                {group}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map(item => (
                  <span
                    key={item}
                    className="text-sm text-[#e2e8f0] px-2 py-1 rounded border border-[#2d2d4e] bg-[#141420]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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
          <a
            key={exp.company}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block grid md:grid-cols-[160px_1fr] gap-3 md:gap-8 p-5 -mx-5 rounded-lg hover:bg-[#1e293b]/50 transition-colors"
          >
            <div className="md:pt-0.5">
              <p className="font-mono text-xs text-[#cbd5e1]">{exp.period}</p>
            </div>
            <div>
              <h3 className="text-lg text-[#e2e8f0] font-medium mb-1 group-hover:text-[#a78bfa] transition-colors">{exp.role}</h3>
              <p className="font-mono text-xs text-[#a78bfa] mb-3">
                {exp.company} · {exp.team}
              </p>
              <p className="text-base text-[#cbd5e1] leading-relaxed">{exp.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const TAG_STYLES = {
  fullstack: 'text-[#4ade80] bg-[#4ade80]/10 border-[#4ade80]/20',
  backend: 'text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20',
  ai: 'text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/20',
}

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader label="projects" />

      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map(project => {
          const Wrapper = project.url ? 'a' : 'div'
          const linkProps = project.url ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {}
          return (
          <Wrapper
            key={project.title}
            {...linkProps}
            className="group block p-5 rounded-lg border border-[#1e1e2e] bg-[#0d0d18] hover:border-[#7c3aed]/30 transition-colors"
          >
            <div className="mb-3">
              <span
                className={`inline-block font-mono text-[11px] px-2 py-0.5 rounded border ${TAG_STYLES[project.type] ?? TAG_STYLES.backend}`}
              >
                {project.type}
              </span>
            </div>
            <h3 className="text-lg text-[#e2e8f0] font-medium mb-2">{project.title}</h3>
            <p className="text-base text-[#cbd5e1] leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map(s => (
                <span
                  key={s}
                  className="font-mono text-xs text-[#e2e8f0] px-2 py-1 rounded border border-[#2d2d4e] bg-[#141420]"
                >
                  {s}
                </span>
              ))}
            </div>
          </Wrapper>
          )
        })}
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 pb-32">
      <SectionHeader label="contact" />

      <p className="text-[#cbd5e1] leading-relaxed text-base mb-8 max-w-md">
        I&apos;m looking for backend or full-stack roles in the UK. If you&apos;re hiring or just
        want to chat, feel free to reach out.
      </p>

      <div className="flex flex-wrap gap-3">
        <ContactButton href="mailto:jolene.y.zou@gmail.com" label="Email" />
        <ContactButton href="https://github.com/RaidenVal" label="GitHub" />
        <ContactButton href="https://www.linkedin.com/in/jolenezou" label="LinkedIn" />
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
      <span className="font-mono text-xs text-[#a78bfa] uppercase tracking-[0.2em] shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#1a1a2e]" />
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0]">
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
