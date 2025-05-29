import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, Zap, Cpu } from "lucide-react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 800);
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const iconVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: {
      scale: 1,
      rotate: 360,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center z-50"
      variants={containerVariants}
      initial="initial"
      animate={isComplete ? "exit" : "initial"}
    >
      <div className="text-center">
        {/* AI Icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center"
          >
            <Brain className="text-white" size={32} />
          </motion.div>
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
          >
            <Zap className="text-white" size={32} />
          </motion.div>
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center"
          >
            <Cpu className="text-white" size={32} />
          </motion.div>
        </div>

        {/* Brand */}
        <motion.h1
          className="text-4xl font-bold gradient-text-gold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          AI Dev Team
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Initializing AI-powered development experience...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-yellow-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <motion.p
          className="text-sm text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {progress < 100 ? `${Math.round(progress)}%` : "Ready!"}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
