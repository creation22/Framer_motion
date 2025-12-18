import React from 'react'
import {  motion } from 'motion/react'
const Button = () => {
  return (

    <div className='flex items-center justify-center h-screen bg-gray-50'>
        <motion.button 
        whileHover = {{ y: -10, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'}}
        whileTap = {{ scale: 0.9 }} 
        transition={{duration : 0.12 , ease : "easeOut"}}
        className='h-11 px-6
        rounded-lg
        bg-blue-600 
        text-white 
        text-sm 
        font-medium
        transition-colors
        hover:bg-blue-700 
        active:bg-blue-800 
        disabled:opacity-50
        disabled:cursor-not-allowed

        '>
            Continue 
        </motion.button>
      
    </div>
  )
}

export default Button
