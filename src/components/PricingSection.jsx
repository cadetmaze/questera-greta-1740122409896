import { motion } from 'framer-motion';
import { BsCheck2Circle } from 'react-icons/bs';

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Start your fitness journey today with our flexible pricing options
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border rounded-xl p-8 bg-gray-50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">Free</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-500 mr-2" />
                Basic workout tracking
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-500 mr-2" />
                Limited exercise library
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-500 mr-2" />
                Community access
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border rounded-xl p-8 bg-blue-600 text-white transform scale-105"
          >
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-6">$9.99/mo</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-300 mr-2" />
                All Basic features
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-300 mr-2" />
                Personalized workout plans
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-300 mr-2" />
                Nutrition tracking
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-300 mr-2" />
                Progress analytics
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border rounded-xl p-8 bg-gray-50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite</h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">$19.99/mo</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-500 mr-2" />
                All Pro features
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-500 mr-2" />
                1-on-1 coaching
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-500 mr-2" />
                Premium content
              </li>
              <li className="flex items-center">
                <BsCheck2Circle className="text-green-500 mr-2" />
                Priority support
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
              Get Elite Access
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;