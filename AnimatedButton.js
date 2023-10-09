import React from 'react';
import { motion } from 'framer-motion';

function AnimatedButton() {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: '#007BFF',
      color: 'white',
      transition: {
        duration: 0.3,
        yoyo: Infinity, 
      },
    },
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="btn"
    >
      Hover me!
    </motion.button>
  );
}

export default AnimatedButton;
