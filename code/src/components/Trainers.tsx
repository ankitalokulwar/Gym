import React from "react";
import { motion } from "framer-motion";
import "./Trainers.css";

const fadeUp = {
  hidden: { opacity: 0.6, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Trainers: React.FC = () => {
  const trainers = [
    {
    name: 'Raj Mishra',
    specialization: 'Strength Training',
    image: '/trainers/raj.svg',
  },
  {
    name: 'Neha Sharma',
    specialization: 'Yoga & Flexibility',
    image: '/trainers/neha.svg',
  },
  {
    name: 'Rhul Mehara',
    specialization: 'Cardio & Endurance',
    image: '/trainers/rahul.svg',
  },
  {
    name: 'Prachi Gupta',
    specialization: 'Nutrition & Wellness',
    image: '/trainers/prachi.svg',
  },
  ];

  return (
    <section className="trainers-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="trainers-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2>Meet Our Expert Trainers</h2>
          <p>
            Our team of certified personal trainers is dedicated to helping you
            achieve your fitness goals. With diverse specializations and
            personalized approaches, they'll guide you every step of the way.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <motion.div
          className="trainers-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              className="trainer-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="trainer-img">
                <motion.img
                  src={trainer.image}
                  alt={trainer.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="trainer-info">
                <h5>{trainer.name}</h5>
                <p>{trainer.specialization}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
