import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy , Heart , HeartCrack ,HandHeart  } from "lucide-react"; 
import { div } from "motion/react-client";

const Exit = () => {
  const [copied, setCopied] = useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const copy = () => {
    navigator.clipboard.writeText("Hello World");
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex justify-center items-center h-screen">

    
    <button aria-label="copy code snippet" onClick={copy} className="text-black  bg-black text-2xl p-3 border rounded-md hover:bg-gray-800 transition">
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="checkmark"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <HandHeart size= { 24} color="white" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Heart  size={24} color="white"/>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
    </div>
  );
};

export default Exit;
