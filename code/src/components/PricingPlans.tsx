import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "./PricingPlans.css";

import checkIcon from "../assets/check-icon.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const plans = [
  {
    name: "Basic",
    price: "3,500",
    period: "month",
    features: ["Access to gym floor", "Group fitness classes", "Locker room access"],
    popular: false,
  },
  {
    name: "Premium",
    price: "4,500",
    period: "month",
    features: [
      "All Basic features",
      "Personal training session (1/month)",
      "Towel service",
      "Guest pass (1/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "5,500",
    period: "month",
    features: [
      "All Premium features",
      "Unlimited personal training",
      "Exclusive member events",
      "Priority class booking",
    ],
    popular: false,
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section id="membership" className="plans-section">
      <div className="plans-container">
        <motion.h2
          className="plans-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          Find Your Perfect Plan
        </motion.h2>

        <motion.p
          className="plans-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Choose a membership that fits your lifestyle and fitness goals.
        </motion.p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="plans-swiper"
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <div className={`plan-card ${plan.popular ? "popular" : ""}`}>
                {plan.popular && <div className="plan-badge">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-price">
                  {plan.price}/-<span> / {plan.period}</span>
                </p>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <img src={checkIcon} alt="check" className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="plan-btn">Choose Plan</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="plans-footer">
          All memberships require a one-time enrollment fee of 1500/-. Memberships can be canceled
          at any time with a 30-day notice.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
