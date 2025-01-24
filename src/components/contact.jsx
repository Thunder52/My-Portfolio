import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=(e)=>{  
        e.preventDefault();
        const serviceId=import.meta.env.VITE_API_service_id;
        const templateId=import.meta.env.VITE_API_template_id;
        const publicKey=import.meta.env.VITE_API_public_key;
        const data={
            from_name:name,
            from_email:email,
            to_name:'Hussain',
            message:message
        }

        emailjs.send(serviceId,templateId,data,publicKey)
        .then((response)=>{
            alert('Thanks for connecting with me');
            console.log(response);
            setName('');
            setMessage('');
            setEmail('');
        }).catch((error)=>{
            console.error('Error sending mail',error);
        });
    }


  return (
    <section
      id="contact"
      className="relative py-20 px-4 md:px-6 bg-[#0a0a0a] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70"
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

      {/* Form Container */}
      <div className="container mx-auto max-w-lg z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
        onSubmit={handleSubmit}
          className="space-y-6 bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TextField
            onChange={(e)=>setName(e.target.value)}
              type="text"
              label="Your Name"
              variant="outlined"
              fullWidth
              value={name}
              required
              InputProps={{
                style: {
                  color: 'white',
                },
              }}
              InputLabelProps={{
                style: { color: '#cfcfcf' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                  },
                },
              }}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TextField
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              label="Your Email"
              value={email}
              variant="outlined"
              fullWidth
              required
              InputProps={{
                style: {
                  color: 'white',
                },
              }}
              InputLabelProps={{
                style: { color: '#cfcfcf' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                  },
                },
              }}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <TextareaAutosize
            onChange={(e)=>setMessage(e.target.value)}
              placeholder="Your Message"
              required
              value={message}
              className="w-full h-32 bg-transparent text-white placeholder-gray-400 border border-white/50 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#ED2279',
                '&:hover': {
                  backgroundColor: '#d31b6a',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease-in-out',
                color: '#ffffff',
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}