import { motion } from 'framer-motion'
import { ProjectCard } from './Project-card'

const projects = [
  {
    title: 'OJ-Project',
    date: 'June - July 2024',
    description:
      'Online-Judge website in which user can Submit programming problems and get their verdict based on their solution.I used MERN stack for this project implement role based Authentication ',
    skills: [
      'REACT',
      'MongoDB',
      'ES6',
      'Deployment',
      'Node.js',
      'Express.js',
      'REST',
      'Postman',
    ],
    image: '/assets/project-1.png',
    Link:'https://algoarena.site/',
    github:'https://github.com/Thunder52/OJ-project.git'
  },
  {
    title: 'OJ-Project',
    date: 'Nov - Dec 2024',
    description:
      'AI invoice data extracter is a web application that extracts data from the invoice pdf,image or excel sheet using AI and show the data on the screen to easily manage invoices. I used MERN stack for this project.',
    skills: [
      'REACT',
      'MongoDB',
      'ES6',
      'Deployment',
      'Node.js',
      'Express.js',
      'REST',
      'Postman',
    ],
    image: '/assets/project-2.png',
    Link:'https://ai-invoice-data-extracter.vercel.app/',
    github:'https://github.com/Thunder52/AI-Invoice-data-Extracter.git'
  },
] 


export function Projects() {

  return (
<div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden" id='projects'>
  {/* Stars background */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {[...Array(100)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: Math.random() * 5,
        }}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
      {/* <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-purple-900/20 border-purple-900/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      className="relative aspect-video"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <img
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                    <div className="p-6 flex flex-col justify-center">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {projects[currentProject].title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-300 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {projects[currentProject].description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Link
                          to={projects[currentProject].url}
                          className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300"
                          target="_blank"
                        >
                          View Project
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              onClick={prev}
              className="p-2 rounded-full bg-purple-900/50 hover:bg-purple-900 text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={next}
              className="p-2 rounded-full bg-purple-900/50 hover:bg-purple-900 text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div> */}
<section className="py-20 relative z-10">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
        </motion.div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </div>
  </section>
</div>
    
  )
}