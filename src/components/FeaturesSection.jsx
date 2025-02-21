import { motion } from 'framer-motion';
import { BsBarChart, BsHeart, BsPeople, BsCalendarCheck } from 'react-icons/bs';

const features = [
  {
    icon: <BsBarChart className="text-4xl text-blue-500" />,
    title: 'Progress Tracking',
    description: 'Monitor your fitness journey with detailed analytics and insights.'
  },
  {
    icon: <BsHeart className="text-4xl text-blue-500" />,
    title: 'Personalized Workouts',
    description: 'Get custom workout plans tailored to your goals and fitness level.'
  },
  {
    icon: <BsPeople className="text-4xl text-blue-500" />,
    title: 'Community Support',
    description: 'Join challenges and connect with like-minded fitness enthusiasts.'
  },
  {
    icon: <BsCalendarCheck className="text-4xl text-blue-500" />,
    title: 'Nutrition Guidance',
    description: 'Access meal plans and nutrition tracking to support your goals.'
  }
];

const FeaturesSection = () => {
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
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features to help you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;