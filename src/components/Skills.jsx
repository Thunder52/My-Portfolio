import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { calculateCircleProgress } from './utils/circular-progress.ts'

const skills = [
  { name: 'React', percentage: 90 },
  { name: 'Node', percentage: 90 },
  { name: 'Express', percentage: 90 },
  { name: 'Cybersecurity', percentage: 75 },
  { name: 'Mongodb', percentage:  90},
  { name: 'PostgreSQL', percentage: 85 },
  { name: 'Docker/AWS', percentage: 75 },
]

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleSkills = skills.slice(currentIndex, currentIndex + 3)

  const next = () => {
    if (currentIndex + 3 < skills.length) setCurrentIndex(currentIndex + 1)
  }

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  return (
    <div className="relative py-20 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden text-white" id='skills'>
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
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         This are my skills in different technology and the profienciency in each skill
        </motion.p>
        
        <div className="relative">
          <div className="flex justify-center items-center gap-4 sm:gap-8">
            <motion.button
              onClick={prev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex flex-wrap justify-center gap-8">
              {visibleSkills.map((skill, index) => {
                const { radius, circumference, offset } = calculateCircleProgress(skill.percentage)
                return (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="relative w-32 h-32 sm:w-48 sm:h-48">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                        <circle
                          cx="100"
                          cy="100"
                          r={radius}
                          className="stroke-purple-900/30"
                          strokeWidth="12"
                          fill="none"
                        />
                        <motion.circle
                          cx="100"
                          cy="100"
                          r={radius}
                          className="stroke-[#ED2279]"
                          strokeWidth="12"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: circumference }}
                          animate={{ strokeDashoffset: offset }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{
                            strokeDasharray: circumference,
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-bold">{skill.percentage}%</span>
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold">{skill.name}</h3>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.button
              onClick={next}
              disabled={currentIndex + 3 >= skills.length}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
      </div>
  )
}