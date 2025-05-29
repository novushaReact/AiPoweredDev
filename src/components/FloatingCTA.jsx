import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Zap } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {" "}
      {isVisible && (
        <motion.div
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Quick Chat Popup */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-16 right-0 w-full max-w-xs sm:w-80 bg-slate-800 border border-slate-600 rounded-2xl p-3 sm:p-6 shadow-2xl max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)]"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                style={{ minWidth: 0 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors touch-target"
                >
                  <X size={16} />
                </button>

                <div className="text-white">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="text-black" size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-xs sm:text-base">
                        Need Help?
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        We're here to help!
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4 leading-relaxed">
                    Get a free consultation and see how AI can transform your
                    development process.
                  </p>

                  <div className="space-y-2">
                    <motion.button
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm hover:shadow-lg transition-all duration-300 touch-target"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="inline mr-2" size={14} />
                      Start Free Consultation
                    </motion.button>
                    <motion.a
                      href="mailto:aipowereddevteam@gmail.com"
                      className="w-full bg-slate-700 text-white font-medium py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm hover:bg-slate-600 transition-colors flex items-center justify-center touch-target"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Quick Email
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 bg-gradient-to-r from-gold to-yellow-500 text-black rounded-full shadow-2xl flex items-center justify-center hover:shadow-gold/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: isExpanded ? 45 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.button>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-500 rounded-full opacity-30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
