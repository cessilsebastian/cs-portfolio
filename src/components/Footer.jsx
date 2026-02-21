import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/cessil', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/cessil', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/cessil', label: 'Twitter' },
    { icon: Mail, href: 'mailto:you@example.com', label: 'Email' }, // change this
  ]

  return (
    <footer className="border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-mono">
              <span className="text-accent-cyan">&lt;</span>
              <span className="text-slate-100">C</span>
              <span className="text-accent-amber">/&gt;</span>
            </span>
            <span className="text-slate-500 text-sm">
              Building the future, one commit at a time.
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-accent-cyan hover:bg-slate-800/50 rounded-lg transition-all"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-slate-500 text-sm font-mono">
            &copy; {currentYear} Cessil Sebastian
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
