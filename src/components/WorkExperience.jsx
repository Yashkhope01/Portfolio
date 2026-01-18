import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Building2, Users, Briefcase, Calendar } from 'lucide-react'
import { LampContainer } from './ui/lamp'
import { useState } from 'react'


export default function WorkExperience() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const experiences = [
    {
      icon: Building2,
      title: 'Backend Web Developer',
      company: 'Techlathe IT Solutions',
      period: 'Oct 2023 - Dec 2023',
      description: 'Built RESTful APIs using Node.js and MongoDB, and tested endpoints via Postman for data collection modules.',
      achievements: [
        'Implemented robust data collection and management solutions leveraging MongoDB, demonstrating core MERN stack proficiency.',
        'Managed the end-to-end backend development for projects, ensuring seamless server-side logic and data integrity.',
        'Developed scalable backend solutions with focus on performance and security.'
      ],
      color: 'from-blue-900 to-blue-700'
    },
    {
      icon: Users,
      title: 'Community Manager',
      company: 'GDGoC ZCOER',
      period: '2022 - Present',
      description: 'Managing community events and fostering developer engagement in the Google Developer Group community.',
      achievements: [
        'Organized and managed GDG community events including WOW (Wonders of Wonders) and CCD (Cloud Community Days).',
        'Built and maintained a strong developer community with regular meetups and workshops.',
        'Facilitated knowledge sharing and networking opportunities for developers.'
      ],
      color: 'from-green-900 to-green-700'
    },
    {
      icon: Briefcase,
      title: 'Freelance Developer',
      company: 'Open for Freelancing',
      period: 'Available',
      description: 'Available for freelance projects and collaborations in web development and backend solutions.',
      achievements: [
        'Open to taking on new projects and challenges.',
        'Flexible availability for short-term and long-term projects.',
        'Specialized in MERN stack development and API design.'
      ],
      color: 'from-purple-900 to-purple-700'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="relative py-12 px-4 overflow-hidden">
      {/* Lamp effect for dark mode */}
      <div className="absolute top-0 left-0 right-0 h-[200px] hidden dark:block pointer-events-none">
        <LampContainer className="opacity-50 absolute inset-0">
          <div></div>
        </LampContainer>
      </div>

      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Professional experience in backend development, community management, and freelance projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`transition-all duration-300 ${
                  hoveredCard !== null && hoveredCard !== index ? 'blur-[2px] scale-[0.98] opacity-60' : ''
                }`}
              >
                <Card className="h-full bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-white/5 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700 dark:text-gray-300">{experience.company}</CardDescription>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                      {experience.description}
                    </p>
                    <div className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 flex-shrink-0"></div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
