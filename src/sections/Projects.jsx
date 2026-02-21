import React from 'react'
import { motion } from 'framer-motion'
import { Globe2, Smartphone, Layers, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'CalmCounty Website',
    badge: 'Production · Solo',
    period: '2024 – Present',
    icon: Globe2,
    tech: ['React', 'Vite', 'GitHub Pages', 'Namecheap'],
    link: 'https://www.calmcounty.com',
    description:
      'Modern marketing site for a local business, built with React and Vite and deployed to GitHub Pages with a custom domain.',
    impact:
      'Handles ongoing content updates, performance optimizations, and SEO improvements to better serve local customers.',
  },
  {
    title: 'Full Stack Web & Mobile Platform',
    badge: 'In Progress · Lead Dev',
    period: '2024 – Present',
    icon: Smartphone,
    tech: ['Java 17', 'Spring Boot 3', 'React', 'React Native', 'PostgreSQL', 'Redis', 'Stripe', 'Razorpay'],
    link: null,
    description:
      'End‑to‑end platform for customers, suppliers, and drivers with shared business logic across web and mobile clients.',
    impact:
      'Leads architecture, infrastructure design, and technical mentorship for a small team, focusing on scalable deployment and clean code.',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-accent-cyan font-mono text-sm">03.</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Selected Projects</h2>
            <span className="hidden sm:block w-24 h-px bg-slate-800" />
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A mix of professional work and personal products that show how I approach scalability, maintainability, and UX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-900/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      <project.icon className="text-accent-cyan" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                      <p className="text-xs font-mono text-slate-500">{project.period}</p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                    {project.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-3">{project.description}</p>
                <p className="text-xs text-slate-500 mb-4">{project.impact}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-900/60 border border-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-accent-cyan hover:text-accent-amber transition-colors"
                  >
                    Visit project
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
