import React from 'react'
import { motion } from "framer-motion";

const Example1 = () => {
  return (
    <div className='flex items-center justify-center  h-screen'>
      <motion.div
      initial = {{opacity : 0 , scale : 0}}
      animate = {{opacity  : 1 , scale  : 3 }}
      className='bg-yellow-400 w-32 h-32 rounded-3xl'
      />
      <motion.div
      animate  = {{
        x : -500 , 
        transition : {
            type : 'spring' , 
            duration : 2 , 
            bounce : 0.4 
        }
      }}
      className='bg-red-500 w-32 h-32 rounded-4xl'
      /> 

      
    </div>
  )
}

export default Example1
