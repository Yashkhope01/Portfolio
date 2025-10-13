import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import { Button } from './ui/button'
import { Download, Github } from 'lucide-react'
import { BackgroundRippleEffect } from './ui/background-ripple-effect'

export default function Hero() {
  const typedElement = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Video Editor.', 'Web Developer.'],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Ripple Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-40 z-0 pointer-events-none">
        <BackgroundRippleEffect
          rows={12}
          cols={30}
          cellSize={48}
          className="pointer-events-none"
        />
      </div>

      {/* Content with higher z-index */}
      <div className="container mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hi, my name is{' '}
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
                <span ref={typedElement}></span>
              </motion.div>
            </div>

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
                <a href="./resume_yash_khope.pdf" download>
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
                <a href="https://github.com/Yashkhope01" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.img
              src="./—Pngtree—developers are coding programs on_14867886.png"
              alt="Developer coding"
              className="w-full max-w-md h-auto"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

