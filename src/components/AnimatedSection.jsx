// import { motion } from 'framer-motion';

// function AnimatedSection({ children }) {
//   return (
//     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//       {children}
//     </motion.div>
//   );
// }

// export default AnimatedSection;










import { motion } from 'framer-motion';

function AnimatedSection({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
