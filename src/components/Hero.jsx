import { motion } from 'framer-motion'
import image from '../assets/peeps-avatar-alpha.png'
import './animation.css'

export function Hero() {

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden" id='home'>
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
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 lg:pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-block bg-[#ED2279] text-white px-4 py-2 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Welcome to my Portfolio
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
  Hii I am Hussain Ali <span className="animate">Web Developer</span>
  {/* <span className="animate-blink">|</span> */}
</h1>
<motion.p 
              className="text-gray-300 text-base sm:text-lg max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I have created many projects and website i love creating responsive and good looking websites and i am very serious and passionate about my work  
            </motion.p>
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
>
  <a
    href="/Hussain Ali MANIT resume 05122024.pdf" // Path to your resume file
    download="Hussain_Ali_Resume.pdf" // Custom file name for the downloaded file
    className="py-[13px] px-[20px] text-[20px] rounded-[10px] bg-gradient-to-r from-[#ED2279] to-[rgb(231,201,35)] cursor-pointer border-none shadow-md hover:opacity-90"
  >
    Download Resume
  </a>
</motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
            <img
              src={image}
              alt="avatar"
              className="relative z-10 w-full max-w-lg mx-auto w-[500px] h-[500px] object-cover rounded-full bg-[#ED2279] p-[10px] shadow-[0_0_30px_#ED2279] brightness-110 hover:shadow-[0_0_50px_#ED2279]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}