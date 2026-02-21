import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2, Database, Layers, Cpu,
  Cloud
} from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const categories = {
    frontend: {
      icon: Code2,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 88 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vite', level: 88 },
        { name: 'Tailwind / CSS', level: 92 },
      ],
    },

    backend: {
      icon: Database,
      title: 'Backend',
      skills: [
        { name: 'Java / Spring Boot', level: 92 },
        { name: 'Node.js', level: 80 },
        { name: 'Oracle SQL', level: 88 },
        { name: 'MySQL / PostgreSQL', level: 88 },
        { name: 'RESTful API Design', level: 93 },
      ],
    },

    ai: {
      icon: Cpu,
      title: 'AI & Automation',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Azure AI Fundamentals (AI‑900)', level: 80 },
        { name: 'Automation / n8n', level: 88 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'Data Pipelines', level: 78 },
      ],
    },

    devops: {
      icon: Cloud,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Git / Bitbucket', level: 92 },
        { name: 'CI/CD (GitHub Actions, Jenkins)', level: 82 },
        { name: 'Azure / AWS', level: 78 },
        { name: 'NGINX / Redis', level: 75 },
      ],
    },

    fintech: {
      icon: Layers,
      title: 'Fintech',
      skills: [
        { name: 'Quantitative Analysis', level: 78 },
        { name: 'Financial APIs', level: 82 },
        { name: 'Data Visualization', level: 80 },
        { name: 'Risk Management', level: 75 },
        { name: 'Trading Automation', level: 72 },
      ],
    },
  }

  return (
    <section id="skills" className="py-24 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-accent-cyan font-mono text-sm">02.</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Technical Skills</h2>
            <span className="hidden sm:block w-24 h-px bg-slate-800" />
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A toolkit shaped by shipping production applications, mentoring others, and experimenting with emerging tech.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${activeCategory === key
                  ? 'bg-accent-cyan text-slate-950'
                  : 'glass text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`}
            >
              <category.icon size={18} />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-8 flex items-center gap-3">
              {React.createElement(categories[activeCategory].icon, {
                className: 'text-accent-cyan',
                size: 24
              })}
              {categories[activeCategory].title}
            </h3>

            <div className="space-y-6">
              {categories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-500 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-accent-cyan to-accent-amber rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">Also worked with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Angular', 'Bootstrap', 'Material UI', 'Oracle PL/SQL', 'MS SQL Server',
              'Jira', 'Azure DevOps', 'Celoxis', 'JUnit', 'IntelliJ IDEA', 'VS Code'
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm text-slate-400 bg-slate-900/50 border border-slate-800 rounded-full hover:border-accent-cyan/30 hover:text-accent-cyan transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
