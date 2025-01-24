import { motion } from 'framer-motion'
import Button from "./Button"
import { Card } from "./ui/Card"

export function ProjectCard({ title, date, description, skills, image, Link, github }) {

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
            }}
        >
            <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <motion.h3 
                                    className="text-2xl font-bold text-blue-700 dark:text-blue-500"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {title}
                                </motion.h3>
                                <motion.span 
                                    className="text-sm text-gray-500 dark:text-gray-400"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {date}
                                </motion.span>
                            </div>

                            <motion.p 
                                className="text-gray-700 dark:text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {description}
                            </motion.p>

                            <motion.div 
                                className="flex flex-wrap gap-2"
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                                initial="hidden"
                                animate="show"
                            >
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            show: { opacity: 1, scale: 1 }
                                        }}
                                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>

                            <motion.div 
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <button 
                                    onClick={()=>window.open(Link, "_blank")}
                                    className="text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 bg-orange-500 hover:bg-orange-600 text-white "
                                >
                                    View Demo
                                </button>
                                <Button 
                                    onClick={()=>window.open(github, "_blank")}
                                    variant="outline"
                                    className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900"
                                >
                                    View Project Details
                                </Button>
                            </motion.div>
                        </div>

                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />
                            <motion.img onClick={()=>window.open(Link, "_blank")}
                                src={image}
                                alt={title}
                                className="relative z-10 w-full h-full object-cover rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}