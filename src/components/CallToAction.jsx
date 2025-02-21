import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Start Your Fitness Journey Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of users who have already transformed their lives with our app
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors"
          >
            Download Now
            <BsArrowRight className="text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;