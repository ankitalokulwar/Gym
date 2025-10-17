import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const images = [
  "./src/assets/gallery/gym8.png",
  "./src/assets/gallery/gym7.png",
  "./src/assets/gallery/gym6.png",
  "./src/assets/gallery/gym5.png",
  "./src/assets/gallery/center.png",
  "./src/assets/gallery/gym1.png",
  "./src/assets/gallery/gym2.png",
  "./src/assets/gallery/gym3.png",
  "./src/assets/gallery/gym4.png",
];

const AUTO_SLIDE_INTERVAL = 5000;

const Gallery: React.FC = () => {
  const [current, setCurrent] = useState(4); // Center index
  const [modalImg, setModalImg] = useState<string | null>(null);
  const slideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (slideTimeout.current) clearTimeout(slideTimeout.current);
    slideTimeout.current = setTimeout(() => {
      setCurrent((curr) => (curr + 1) % images.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      if (slideTimeout.current) clearTimeout(slideTimeout.current);
    };
  }, [current]);

  const getImgIdx = (i: number) => (current - 4 + i + images.length) % images.length;

  const cardConfig = [
    { scale: 0.68, x: -400, z: 1 },
    { scale: 0.77, x: -300, z: 2 },
    { scale: 0.85, x: -200, z: 3 },
    { scale: 0.93, x: -100, z: 4 },
    { scale: 1.0, x: 0, z: 12 },
    { scale: 0.93, x: 100, z: 4 },
    { scale: 0.85, x: 200, z: 3 },
    { scale: 0.77, x: 300, z: 2 },
    { scale: 0.68, x: 400, z: 1 },
  ];

  return (
    <section className="gallery-section">
      <motion.h2
        className="gallery-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        Vibrant Ambiance
      </motion.h2>

      <motion.div
        className="gallery-carousel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <AnimatePresence>
          {cardConfig.map((card, i) => {
            const idx = getImgIdx(i);
            const isCenter = i === 4;

            return (
              <motion.div
                key={`${idx}-${current}`} // re-render each slide smoothly
                className={`gallery-img-wrapper${isCenter ? " center" : ""}`}
                style={{
                  zIndex: card.z,
                  width: isCenter ? "340px" : `calc(340px * ${card.scale})`,
                  height: isCenter ? "500px" : `calc(500px * ${card.scale})`,
                  top: `calc(28px + ${(1 - card.scale) * 500 / 2}px)`,
                  boxShadow: isCenter
                    ? "0 16px 48px 0 rgba(0,0,0,0.55)"
                    : "0 2px 16px 0 rgba(0,0,0,0.18)",
                }}
                initial={{ opacity: 0, x: card.x * 1.2, scale: card.scale * 0.95 }}
                animate={{
                  opacity: 1,
                  x: card.x,
                  scale: card.scale,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                exit={{ opacity: 0, x: card.x * 1.2, transition: { duration: 0.4 } }}
                onClick={() => setModalImg(images[idx])}
              >
                <motion.img
                  src={`${images[idx]}?auto=format&fit=crop&w=900&q=80`}
                  alt={`gallery-img-${idx}`}
                  draggable={false}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>

        <button className="nav-btn prev" onClick={handlePrev} aria-label="Previous Slide">
          &#10094;
        </button>
        <button className="nav-btn next" onClick={handleNext} aria-label="Next Slide">
          &#10095;
        </button>
      </motion.div>

      {/* Modal Popup */}
      {modalImg && (
        <motion.div
          className="gallery-modal"
          onClick={() => setModalImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="close-btn" onClick={() => setModalImg(null)}>
            &times;
          </span>
          <motion.img
            src={modalImg}
            alt="Full View"
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
