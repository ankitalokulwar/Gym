import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "./Hero.css";

interface Slide {
    image: string;
    title: string;
    subtitle: string;
    buttonText: string;
}

const slides: Slide[] = [
    {
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
        title: "Unleash Your Potential",
        subtitle: "Transform your body and mind with our expert trainers and state-of-the-art facilities. Join our community and achieve your fitness goals.",
        buttonText: "Start Your Journey",
    },
    {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
        title: "Train Hard, Stay Strong",
        subtitle: "Push your limits every day and become the best version of yourself. We help you reach your goals faster and smarter.",
        buttonText: "Join Now",
    },
    {
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1600&q=80",
        title: "Redefine Your Fitness",
        subtitle: "With modern equipment and personalized plans, fitness becomes fun and effective. Take the first step today!",
        buttonText: "Get Started",
    },
];

const Hero: React.FC = () => {
    const [current, setCurrent] = useState(0);

    // Next & Previous slide logic
    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    // Auto-slide every 8 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    // Swipe gesture handlers
    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        trackMouse: true,
    });

    return (
        <section className="hero-section" {...handlers}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="hero-slide"
                    style={{ backgroundImage: `url(${slides[current].image})` }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1 }}
                >
                    <div className="overlay">
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>{slides[current].title}</h1>
                            <p>{slides[current].subtitle}</p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {slides[current].buttonText}
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Manual navigation buttons */}
            <button className="nav-btn prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="nav-btn next" onClick={nextSlide}>
                &#10095;
            </button>

            {/*  Dot Indicators */}
            <div className="hero-dots">
                {slides.map((_, index) => (
                    <motion.span
                        key={index}
                        className={`dot ${index === current ? "active" : ""}`}
                        onClick={() => setCurrent(index)}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
