import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLETID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        setEmail("");
        setMessage("");
        setName("");
        setSubject("");
      })
      .catch(() => {
        toast.error("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-16 ">
   
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center  mb-14"
      >
        📬 Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10"
      >
        {/* Contact Info */}
        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white shadow-lg border border-primary/20">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Info</h3>

          <div className="flex items-center gap-4 text-primary">
            <FaEnvelope size={22} />
            <p className="font-medium">riajul.karim52@gmail.com</p>
          </div>

          <div className="flex items-center gap-4 text-primary">
            <FaPhone size={22} />
            <p className="font-medium">+880178867912</p>
          </div>

          <div className="flex items-center gap-4 text-primary">
            <FaMapMarkerAlt size={22} />
            <p className="font-medium">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleContact}
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full focus:outline-primary focus:ring-2 focus:ring-primary transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full focus:outline-primary focus:ring-2 focus:ring-primary transition"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input input-bordered w-full mb-6 focus:outline-primary focus:ring-2 focus:ring-primary transition"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea textarea-bordered w-full mb-6 focus:outline-primary focus:ring-2 focus:ring-primary transition"
            required
          ></textarea>

          <button
            type="submit"
            className={`btn btn-primary w-full text-white font-semibold ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
