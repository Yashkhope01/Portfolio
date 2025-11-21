import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Download, Github } from 'lucide-react'
import { BackgroundRippleEffect } from './ui/background-ripple-effect'

const TYPOGRAPHY_PHRASES = ['Video Editor.', 'Web Dev.']
const HERO_IMAGE_URL = './—Pngtree—developers are coding programs on_14867886.png'

const useTypewriter = (phrases) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [mode, setMode] = useState('typing')

  useEffect(() => {
    if (!phrases.length) {
      return undefined
    }

    let timeout
    const currentPhrase = phrases[index]

    if (mode === 'typing') {
      const nextChar = currentPhrase[text.length]
      if (nextChar) {
        timeout = setTimeout(() => setText((prev) => prev + nextChar), 70)
      } else {
        timeout = setTimeout(() => setMode('waiting'), 1400)
      }
    } else if (mode === 'waiting') {
      timeout = setTimeout(() => setMode('deleting'), 800)
    } else if (mode === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText((prev) => prev.slice(0, -1)), 40)
      } else {
        timeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % phrases.length)
          setMode('typing')
        }, 200)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, mode, index, phrases])

  return text
}

export default function Hero() {
  const typedText = useTypewriter(TYPOGRAPHY_PHRASES)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-visible"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-40 z-0 pointer-events-none">
        <BackgroundRippleEffect
          rows={12}
          cols={30}
          cellSize={48}
          className="pointer-events-none"
        />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white space-y-1"
            >
              <p>Hi, my name is</p>
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
                Yash
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl text-gray-800 dark:text-white"
            >
              and I am a passionate
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-5xl bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent font-bold"
            >
              <span className="typing-cursor">{typedText}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button
                size="lg"
                className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
                asChild
              >
                <a href="https://docs.google.com/document/d/1_HKdaa-rD9a8OFiyxxMR2VKimcPYM7Z8/edit" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                asChild
              >
                <a
                  href="https://github.com/Yashkhope01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.img
              src={HERO_IMAGE_URL}
              alt="Developer coding"
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

