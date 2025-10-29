import React from "react";
import { motion } from "framer-motion";
import "./Classes.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Classes: React.FC = () => {
  return (
    <section className="classes-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2>Programs & Services</h2>
          <p>
            Explore our diverse range of fitness programs designed to help you
            achieve your goals. From group classes to personalized training, we
            have something for everyone.
          </p>
        </motion.div>

        {/* Group Classes */}
        <motion.div
          className="group-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <h4>Group Classes</h4>
          <div className="group-grid">
            {[
              {
                img: "/classes/HIIT.svg",
                title: "High-Intensity Interval Training (HIIT)",
                text: "Push your limits with our high-energy HIIT classes, designed to maximize calorie burn and build strength.",
              },
              {
                img: "/classes/yoga.svg",
                title: "Yoga & Mindfulness",
                text: "Find your inner peace and improve flexibility with our calming yoga sessions.",
              },
              {
                img: "/classes/spin.svg",
                title: "Spin & Cycle",
                text: "Experience the thrill of indoor cycling with our motivating spin classes.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="class-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: index * 0.2 }}
              >
                <div className="class-img-wrapper">
                  <img src={item.img} alt={item.title} />
                </div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Training */}
        <motion.div
          className="personal-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          {/* <h4>Personal Training</h4> */}
          <div className="personal-grid">
            <motion.div
              className="personal-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
            >
              <h5>One-on-One Coaching</h5>
              <p>
                Receive personalized guidance and support from our certified
                trainers to achieve your specific fitness objectives.
              </p>
              <p>
                Achieve your fitness goals faster with personalized training
                sessions tailored to your needs and fitness level.
              </p>
            </motion.div>

            <motion.div
              className="personal-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/classes/personaltraining.svg"
                alt="Personal Training"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Specialized Programs Section */}
        <motion.div
          className="programs-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <h4>Specialized Programs</h4>
          <div className="programs-grid">
            {[
              {
                img: "/classes/weight.svg",
                title: "Weight Management",
                text: "Our comprehensive program combines exercise, nutrition, and support to help you reach your ideal weight.",
              },
              {
                img: "/classes/strenght.svg",
                title: "Strength & Conditioning",
                text: "Build muscle and increase your overall strength with our tailored strength training program.",
              },
              {
                img: "/classes/atheletic.svg",
                title: "Athletic Performance",
                text: "Enhance your athletic abilities with our specialized conditioning program for athletes of all levels.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="program-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: index * 0.2 }}
              >
                <div className="program-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="program-content">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="additional-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <h4>Additional Services</h4>
          <div className="additional-grid">
            {[
              {
                title: "Nutritional Guidance",
                text: "Optimize your diet with personalized advice from our registered dietitians.",
              },
              {
                title: "Recovery & Wellness",
                text: "Relax and rejuvenate with our therapeutic massage services.",
              },
              {
                title: "Rehabilitation Services",
                text: "Recover from injuries and improve your physical health with our expert physical therapy.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="additional-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: index * 0.2 }}
              >
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;
