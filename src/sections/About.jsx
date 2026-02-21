import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Rocket, TrendingUp, Bot } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'Over three years building production applications with React, Spring Boot, and modern cloud infrastructure.',
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      description: 'Building voice AI agents and automation workflows that solve real business problems.',
    },
    {
      icon: TrendingUp,
      title: 'Fintech Focus',
      description: 'Passionate about quantitative investing, algorithmic trading, and financial automation tools.',
    },
    {
      icon: Rocket,
      title: 'Entrepreneurial Mindset',
      description: 'Solo builder with multiple ventures in progress. Ship fast, iterate faster.',
    },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-accent-cyan font-mono text-sm">01.</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">About Me</h2>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer based in Regina, Saskatchewan, with hands‑on experience in Java,
                Spring Boot, and modern front‑end frameworks like React and Vue.js. I currently work at
                Saskatchewan Healthcare Employees Pension Plan (SHEPP), designing and maintaining core
                applications that the Plan depends on every day.
              </p>
              <p>
                At SHEPP I&apos;ve led modernization work on 20+ legacy Java applications, migrating them from Java 8
                to Java 21 and from NetBeans to IntelliJ‑based Maven projects, while helping drive the
                SHEPPWeb modernization from a monolithic Java EE app to modular Spring Boot APIs with a new
                Vue.js frontend. I also handle security scans, database automation, and mentor junior developers.
              </p>
              <p>
                Outside of work, I&apos;m building CalmCounty, a React + Vite website hosted on GitHub Pages,
                and leading a full‑stack web and mobile project powered by Spring Boot, React, React Native,
                PostgreSQL, Redis, and Stripe/Razorpay integrations. I&apos;m also pursuing a part‑time B.Sc. in
                Computer Science at the University of Regina and continuously investing in my skills through
                certifications like Azure AI Fundamentals (AI‑900).
              </p>

            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-cyan">3+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-800" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-amber">10+</div>
                <div className="text-sm text-slate-500">Projects Shipped</div>
              </div>
              <div className="w-px h-12 bg-slate-800" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-rose">5+</div>
                <div className="text-sm text-slate-500">Side Ventures</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 glass rounded-xl hover:bg-slate-800/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-accent-cyan/10 transition-colors">
                  <item.icon className="text-accent-cyan" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
