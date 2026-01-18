import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { LampContainer } from './ui/lamp'
import { useState } from 'react'

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const services = [
    {
      icon: './react-16-svgrepo-com.svg',
      title: 'React Dev',
      proficiency: 90,
      description:
        'Developed responsive and dynamic web applications using React.js, HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile optimization. Collaborated closely with designers to translate UI/UX designs into interactive, user-friendly interfaces.',
    },
    {
      icon: './icons8-node-js-32.png',
      title: 'Node Js Dev',
      proficiency: 85,
      description:
        'Developed scalable backend applications using Node.js, Express, and MongoDB. Collaborated with front-end teams to enhance user experience. Ensured code quality through testing and version control.',
    },
    {
      icon: './icons8-sql-60.png',
      title: 'SQL Dev',
      proficiency: 80,
      description:
        'Developed and optimized SQL queries for data retrieval and manipulation. Designed and maintained database schemas, ensuring data integrity and performance. Collaborated with cross-functional teams.',
    },
    {
      icon: './icons8-video-editing-64.png',
      title: 'Video Editor',
      proficiency: 88,
      description:
        'Experienced video editor with strong skills in crafting compelling narratives. Proficient in Adobe Premiere Pro, Da Vinci, and After Effects. Successfully managed diverse projects enhancing visual storytelling.',
    },
    {
      icon: './icons8-web-50.png',
      title: 'Web Dev',
      proficiency: 92,
      description:
        'Dynamic web developer with hands-on experience in building responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and React, with strong focus on user experience and performance.',
    },
    {
      icon: './icons8-node-js-32.png',
      title: 'API Development',
      proficiency: 85,
      description:
        'Expert in building RESTful APIs and backend services using Node.js, Express, and MongoDB. Experienced in API testing with Postman and implementing robust data collection solutions.',
    },
    
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
    <section id="services" className="relative py-12 px-4 overflow-hidden">
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
          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">What I can do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">Skills</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
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
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-16 h-16 filter brightness-0 invert-0 dark:brightness-0 dark:invert"
                    />
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                    {service.description}
                  </CardDescription>
                  
                  {/* Proficiency Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{service.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${service.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

