import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-accent-cyan font-mono text-sm">05.</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">Let&apos;s Connect</h2>
            <span className="hidden sm:block w-24 h-px bg-slate-800" />
          </div>
          <p className="text-slate-400">
            I&apos;m open to full‑stack roles, forward‑deployed engineering positions, and opportunities to build
            fintech, AI, or automation products. If you think I&apos;d be a good fit, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass rounded-2xl p-8 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin size={18} className="text-accent-cyan" />
            <span>Regina, Saskatchewan, Canada</span>
          </div>
          <a
            href="mailto:cessilsebastian@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-slate-950 font-medium hover:bg-accent-amber transition-colors"
          >
            <Mail size={18} />
            <span>Email me</span>
            <Send size={16} />
          </a>
          <p className="text-xs text-slate-500 font-mono mt-2">
            Prefer async? Feel free to include links to your stack, product ideas, or a short brief.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
