import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, ShieldCheck, Database, FileCog } from 'lucide-react'

const roles = [
  {
    company: 'Saskatchewan Healthcare Employees Pension Plan (SHEPP)',
    title: 'Full Stack Developer',
    period: 'Nov 2023 – Present',
    location: 'Regina, SK · Hybrid',
    icon: ShieldCheck,
    bullets: [
      'Design and maintain core applications and systems using Java, Spring Boot, Oracle PL/SQL, and Azure DevOps.',
      'Led modernization of 20+ legacy Java applications from Java 8 to Java 21 and from NetBeans to IntelliJ‑based Maven projects.',
      'Contribute to SHEPPWeb modernization by transforming a monolithic Java EE app into modular RESTful APIs and a new Vue.js frontend.',
      'Run code and vulnerability scans, remediate issues, and collaborate with external vendors on database and static content hosting.',
      'Mentor junior developers and co‑op students through architecture walkthroughs, environment setup, and code reviews.',
    ],
  },
  {
    company: 'Saskatchewan Healthcare Employees Pension Plan (SHEPP)',
    title: 'Applications Analyst',
    period: 'Aug 2022 – Nov 2023',
    location: 'Regina, SK',
    icon: Database,
    bullets: [
      'Maintained systems critical to Plan administration using Oracle JDeveloper, Oracle PL/SQL, Bitbucket, and SourceTree.',
      'Resolved 50+ defects and helped update policies and integrations across SHEPPWeb and internal applications.',
      'Owned system integration points, data integrity checks, and security audits while keeping documentation up to date.',
    ],
  },
  {
    company: 'Saskatchewan Health Authority',
    title: 'IT Consultant',
    period: 'Feb 2022 – Mar 2022',
    location: 'Regina, SK',
    icon: FileCog,
    bullets: [
      'Processed 200+ incoming files per day while maintaining confidentiality and data quality.',
      'Handled data management, error logging, and communication with clients via Microsoft Teams and Cisco Webex.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-accent-cyan font-mono text-sm">04.</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Experience</h2>
            <span className="hidden sm:block w-24 h-px bg-slate-800" />
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Roles where I&apos;ve owned critical systems, led modernization efforts, and mentored others.
          </p>
        </motion.div>

        <div className="space-y-6">
          {roles.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mt-1">
                    <role.icon className="text-accent-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{role.title}</h3>
                    <p className="text-sm text-slate-300">{role.company}</p>
                    <p className="text-xs font-mono text-slate-500">{role.location}</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-500 whitespace-nowrap">
                  {role.period}
                </p>
              </div>

              <ul className="space-y-2 text-sm text-slate-400">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-cyan/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
