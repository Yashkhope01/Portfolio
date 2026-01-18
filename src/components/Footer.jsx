import { motion } from 'framer-motion'
import { Linkedin, Instagram, Github, Twitter, Phone, Mail } from 'lucide-react'
import CoffeeCounter from './CoffeeCounter'

export default function Footer() {
  const footerLinks = [
    {
      title: 'Social',
      links: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-khope-25b095275/', icon: Linkedin },
        { name: 'Instagram', href: 'https://www.instagram.com/y.k_yash_01', icon: Instagram },
      ],
    },
    {
      title: 'Code',
      links: [
        { name: 'Github', href: 'https://github.com/Yashkhope01', icon: Github },
        { name: 'Twitter', href: 'https://x.com/k_yash_03', icon: Twitter },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: '+91 8975905912', href: 'tel:+918975905912', icon: Phone },
        { name: 'yashkhope01@gmail.com', href: 'mailto:yashkhope01@gmail.com', icon: Mail },
      ],
    },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-16 px-4 mt-20 dark:border-t dark:border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
              Yash's Developer
            </h2>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
              Portfolio
            </h2>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{link.name}</span>
                      </motion.a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Coffee Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <CoffeeCounter />
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-300 dark:border-purple-500/30 text-center text-gray-600 dark:text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Yash Khope. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

