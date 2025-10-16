import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const initialForm: FormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState<null | boolean>(null);

    // Validate a single field (used for realtime validation)
    const validateField = (name: keyof FormState, value: string): string | "" => {
        const v = value.trim();

        if (name === "name") {
            if (!v) return "Name is required";
            if (v.length < 2) return "Enter at least 2 characters";
            return "";
        }

        if (name === "email") {
            if (!v) return "Email is required";
            // simple email regex
            const re = /^[\w.+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!re.test(v)) return "Enter a valid email";
            return "";
        }

        if (name === "phone") {
            if (!v) return "Phone is required";
            // allow + and digits, minimal 10 digits
            const digits = v.replace(/[^\d+]/g, "");
            if (!/^\+?\d{10}$/.test(digits)) return "Enter a valid phone number";
            return "";
        }

        if (name === "message") {
            if (!v) return "Message is required";
            if (v.length < 10) return "Message must be at least 10 characters";
            return "";
        }

        return "";
    };

    // Validate all fields — used on submit
    const validateAll = (values: FormState) => {
        const next: Partial<Record<keyof FormState, string>> = {};
        (Object.keys(values) as Array<keyof FormState>).forEach((k) => {
            const msg = validateField(k, values[k]);
            if (msg) next[k] = msg;
        });
        return next;
    };

    // Real-time: run validation for the changed field as user types
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name as keyof FormState;
        const value = e.target.value;
        setForm((p) => ({ ...p, [name]: value }));

        // show errors as soon as user starts typing:
        // if there's any input (non-empty) run validation and show message; if empty show required message.
        const msg = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: msg || "" }));
    };

    // On blur, ensure validation states are current
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name as keyof FormState;
        const value = e.target.value;
        const msg = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: msg || "" }));
    };

    // compute whether form is valid (no errors and all fields non-empty)
    const isFormValid = useMemo(() => {
        const anyEmpty = Object.values(form).some((v) => v.trim() === "");
        const anyError = Object.values(errors).some((v) => v && v.length > 0);
        // also ensure all fields pass validation even if user hasn't typed in them yet
        const validated = Object.keys(form).every((k) => {
            const key = k as keyof FormState;
            return validateField(key, form[key]) === "";
        });
        return !anyEmpty && !anyError && validated;
    }, [form, errors]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const next = validateAll(form);
        setErrors(next);
        if (Object.keys(next).length > 0) {
            setSubmitSuccess(false);
            return;
        }

        setSubmitting(true);
        setSubmitSuccess(null);

        try {
            // Replace this with real API call if needed
            await new Promise((res) => setTimeout(res, 800));
            console.log("Contact submitted:", form);

            setSubmitSuccess(true);
            setForm(initialForm);
            setErrors({});
        } catch (err) {
            setSubmitSuccess(false);
        } finally {
            setSubmitting(false);
        }
    };

    const fadeUp = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.75 } };

    return (
        <section className="contact-section" id="contactus" aria-label="Contact section">
            <div className="container-fluid px-lg-5">
                <div className="contact-grid">
                    {/* LEFT - FORM */}
                    <motion.div className="contact-form" {...fadeUp}>
                        <h2>Contact Us</h2>
                        <p>
                            We're here to help. Reach out to us with any questions
                            or inquiries.
                        </p>

                        <form className="wpcf7" onSubmit={handleSubmit} noValidate>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name ? <div className="field-error" id="name-error">{errors.name}</div> : null}

                            <input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email ? <div className="field-error" id="email-error">{errors.email}</div> : null}

                            <input
                                name="phone"
                                id="phone"
                                type="tel"
                                placeholder="Your Phone"
                                value={form.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={!!errors.phone}
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                            />
                            {errors.phone ? <div className="field-error" id="phone-error">{errors.phone}</div> : null}

                            <textarea
                                name="message"
                                id="message"
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                            />
                            {errors.message ? <div className="field-error" id="message-error">{errors.message}</div> : null}

                            <input
                                type="submit"
                                value={submitting ? "Sending..." : "Send Message"}
                                disabled={submitting || !isFormValid}
                                aria-busy={submitting}
                            />

                            {submitSuccess === true && <div className="submit-success">Message sent successfully.</div>}
                            {submitSuccess === false && <div className="submit-error">Please fix the errors and try again.</div>}
                        </form>
                    </motion.div>

                    {/* RIGHT - INFO + MAP */}
                    <motion.div className="contact-info" {...fadeUp}>
                        <h2>Our Information</h2>

                        <ul className="info-list">
                            <li>
                                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                                <a
                                    href="https://maps.app.goo.gl/zhHvgmHiMMzDkwXB8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Yashone Infinitee, By VJ, Kate Wasti, Punewale, Pune, Maharashtra
                                </a>
                            </li>

                            <li>
                                <i className="fa-solid fa-phone" aria-hidden="true" />
                                <a href="tel:+917447360666">7447360666</a>
                            </li>

                            <li>
                                <i className="fa-solid fa-envelope" aria-hidden="true" />
                                <a href="mailto:info@engraftsolutions.com">info@engraftsolutions.com</a>
                            </li>
                        </ul>

                        <div className="map" aria-label="Company location map">
                            {/* Embedded map for Yashone Infinitee, Pune (search-based embed) */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2948000089973!2d73.73425622531576!3d18.619729832493174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb653f1fde0f%3A0x15b0d99c95534d8b!2sYashONE%20INFINITEE%20by%20Vilas%20Javdekar%20Developers!5e1!3m2!1sen!2sin!4v1760347296020!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <div className="social-icons">
                            <a href="#" aria-label="facebook"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="#" aria-label="instagram"><i className="fa-brands fa-instagram" /></a>
                            <a href="#" aria-label="whatsapp"><i className="fa-brands fa-whatsapp" /></a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
