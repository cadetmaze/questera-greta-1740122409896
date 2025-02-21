import { motion } from 'framer-motion';
import { BsApple, BsGooglePlay } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 to-green-400 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000"
          alt="Fitness Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Fitness Journey Today
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Your personal trainer, nutritionist, and motivator - all in one app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors"
            >
              <BsApple className="text-2xl" />
              Download for iOS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors"
            >
              <BsGooglePlay className="text-2xl" />
              Download for Android
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;