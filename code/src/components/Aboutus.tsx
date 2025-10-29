import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutUs: React.FC = () => {
    return (
        <section className="about-section">
            {/* Why Choose Section */}
            <div className="why-choose">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUp}
                >
                    Why Choose Titan Strength?
                </motion.h2>

                <motion.p
                    className="subtitle"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                >
                    We offer a comprehensive approach to fitness, combining expert guidance,
                    cutting-edge equipment, and a supportive community to help you achieve lasting results.
                </motion.p>

                <div className="features">
                    {[
                        {
                            icon: "/aboutus/trainers.svg",
                            title: "Expert Trainers",
                            text: "Our certified trainers provide personalized guidance and motivation to help you reach your fitness goals.",
                        },
                        {
                            icon: "/aboutus/state.svg",
                            title: "State-of-the-Art Facilities",
                            text: "Experience the latest in fitness technology and equipment in our modern and spacious facilities.",
                        },
                        {
                            icon: "/aboutus/supportive.svg",
                            title: "Supportive Community",
                            text: "Join a community of like-minded individuals who will support and inspire you on your fitness journey.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="icon-wrapper">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Our Story Section */}
            <div className="story-section">
                {/* Background Image with Ken Burns Effect */}
                <motion.div
                    className="story-bg"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.1 }}
                    transition={{ duration: 6 }}
                    viewport={{ once: false, amount: 0.5 }}
                ></motion.div>

                <div className="overlay"></div>

                <motion.div
                    className="story-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <h2>Our Story</h2>
                    <p>
                        Titan Strength was founded with a simple mission: to empower individuals
                        to achieve their fitness goals in a supportive and inclusive environment.
                    </p>
                    <button className="explore-btn">Explore Our Values</button>

                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={fadeUp}
                        transition={{ delay: 0.2 }}
                    >
                        Our Philosophy
                    </motion.h3>

                    <motion.p
                        className="philosophy"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={fadeUp}
                        transition={{ delay: 0.3 }}
                    >
                        We are committed to providing a holistic approach to fitness. We focus on
                        personalized training programs, nutritional guidance, and a strong sense of
                        community. Our certified trainers are dedicated to helping you reach your
                        full potential, whether you're a beginner or a seasoned athlete.
                        <br />
                        We believe in fostering a positive and encouraging atmosphere where
                        everyone feels welcome and supported on their fitness journey.
                    </motion.p>
                </motion.div>
            </div>

            {/* Mission & Values Section */}
            <div className="mission-values-row">
                <motion.div
                    className="mission-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeUp}
                >
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to empower individuals to lead healthier, more active lives.
                        We strive to provide a comprehensive fitness experience that caters to diverse needs and goals.
                        From state-of-the-art equipment to personalized training programs, we’re committed to delivering excellence in every aspect of our services.
                    </p>
                </motion.div>
                <motion.div
                    className="values-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                >
                    <h3>Our Values</h3>
                    <p>
                        At Titan Strength, our core values guide everything we do. We prioritize community, fostering a sense of belonging and mutual support among our members.
                        We champion inclusivity, welcoming individuals of all backgrounds and fitness levels.
                        We are dedicated to excellence, continuously improving our facilities, programs, and services.
                    </p>
                </motion.div>
            </div>

            {/* What Makes Us Unique Section */}
            <div className="unique-section">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUp}
                >
                    What Makes Us Unique
                </motion.h2>
                <div className="unique-cards">
                    {[
                        {
                            icon: "/aboutus/community.svg",
                            title: "Community Focus",
                            text: "We're more than just a gym; we're a community of like-minded individuals supporting each other's fitness journeys.",
                        },
                        {
                            icon: "/aboutus/wellness.svg",
                            title: "Wellness Approach",
                            text: "We prioritize your overall well-being, offering resources for both physical and mental health.",
                        },
                        {
                            icon: "/aboutus/expert.svg",
                            title: "Expert Guidance",
                            text: "Our certified trainers provide personalized guidance and support to help you achieve your goals.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="unique-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="unique-icon-wrapper">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default AboutUs;
