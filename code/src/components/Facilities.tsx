import React from 'react';
import { motion } from 'framer-motion';
import './Facilities.css';

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const facilities = [
    {
        imgSrc: '/facilities/cardio.svg',
        title: 'Cardio Zone',
        description: 'State-of-the-art treadmills, ellipticals, and bikes.',
    },
    {
        imgSrc: '/facilities/strenght.svg',
        title: 'Strength Training',
        description: 'Comprehensive free weights and machine selection.',
    },
    {
        imgSrc: '/facilities/group.svg',
        title: 'Group Fitness Studio',
        description: 'Spacious studio for yoga, pilates, and more.',
    },
    {
        imgSrc: '/facilities/recovery.svg',
        title: 'Recovery Area',
        description: 'Dedicated space for stretching and relaxation.',
    },
];

const Facilities: React.FC = () => (
    <section className="facilities-section">
        <div className='container'>
            {/* Header */}
            <motion.h2
                className="facilities-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
            >
                Our Facilities
            </motion.h2>

            <div className="facilities-cards">
                {facilities.map((facility, idx) => (
                    <motion.div
                        className="facility-card"
                        key={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeUp}
                        transition={{ delay: idx * 0.2 }}
                    >
                        <img className="facility-image" src={facility.imgSrc} alt={facility.title} />
                        <div className="facility-content">
                            <h3>{facility.title}</h3>
                            <p>{facility.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Facilities;