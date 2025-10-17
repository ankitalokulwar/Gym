import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import rajiv from "../assets/olivia.jpg";
import jaylaxmi from "../assets/soliva.jpg";
import narayan from "../assets/ethian.jpg";

import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";
import RatingDropdown from "./RatingDropdown";

// Testimonial data
interface TestimonialData {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Rajiv Singhania",
    quote:
      "Fitness Hub has completely changed my perspective on working out. The trainers are incredibly supportive, and the community is so welcoming. I've never felt stronger or more confident!",
    rating: 5,
    image: rajiv,
  },
  {
    id: 2,
    name: "Jaylaxmi Rao",
    quote:
      "The variety of classes is amazing. I can go from a high-intensity interval training session to a relaxing yoga class all in the same week. Highly recommend!",
    rating: 5,
    image: jaylaxmi,
  },
  {
    id: 3,
    name: "Narayan Murti",
    quote:
      "As a beginner, I was intimidated to join a gym, but the staff at Fitness Hub made me feel comfortable from day one. They guided me through every workout, and now I can't imagine my life without it.",
    rating: 5,
    image: narayan,
  },
  {
    id: 4,
    name: "Priya Sharma",
    quote:
      "I used to dread going to the gym, but Fitness Hub's positive atmosphere and expert trainers have made fitness fun and engaging for me!",
    rating: 4,
    image: jaylaxmi,
  },
  {
    id: 5,
    name: "Rahul Kumar",
    quote:
      "The personalized training plans here are outstanding. I've seen incredible results in just a few months. Highly recommend their strength programs!",
    rating: 5,
    image: narayan,
  },
];

// Render stars
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className="star" style={{ color: i < rating ? "#FFD700" : "#444" }}>
        ★
      </span>
    );
  }
  return <div className="testimonial-rating">{stars}</div>;
};


// Custom styled feedback form
const FeedbackForm: React.FC = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!rating) newErrors.rating = "Please select a rating.";
    if (!comments.trim()) newErrors.comments = "Comment cannot be empty.";
    else if (comments.trim().length < 10)
      newErrors.comments = "Please enter at least 10 characters.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    console.log({ name, rating, comments });
    setSuccess("✅ Thank you for your feedback!");
    setErrors({});
    setName("");
    setRating("");
    setComments("");
  };

  return (
    <div className="feedback-form-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`form-input ${errors.name ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.name || "\u00A0"}</div>
        </div>

     <RatingDropdown
  value={rating}
  onChange={(val) => setRating(val)}
  error={errors.rating}
/>


        <div className="form-field">
          <textarea
            placeholder="Your Comments"
            rows={5}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className={`form-input ${errors.comments ? "is-invalid" : ""}`}
          ></textarea>
<p className="invalid-feedback">{errors.name ? errors.name : " "}</p>
        </div>

        <button type="submit" className="feedback-submit-btn">
          Submit Feedback
        </button>

        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

// Combined section
const TestimonialsAndForm: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-and-form-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Members Say</h2>
          <p className="section-subtitle">
            Real stories from real people who transformed their lives with us.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="testimonials-swiper"
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card">
                <div className="profile-wrapper">
                  <img src={t.image} alt={t.name} className="client-photo" />
                </div>
                <p className="client-name">{t.name}</p>
                {renderStars(t.rating)}
                <p className="testimonial-quote">{t.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <FeedbackForm />
      </div>
    </section>
  );
};

export default TestimonialsAndForm;
