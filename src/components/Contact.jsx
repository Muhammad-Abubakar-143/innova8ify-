import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData)
        
    emailjs
      .send(
        'service_vjbc3uc', 
        'template_wzobmfh',
        formData,
        '107k763SYnpRteDk9'
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setLoading(false);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <section
      id="contact-us"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Contact Us
      </motion.h1>
      <motion.div
        className="bg-white/10 md:p-10 p-5 rounded-xl flex justify-center"
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
      >
        <form className="flex flex-wrap items-center" onSubmit={handleSubmit}>
          <div className="px-3 lg:w-1/2 mb-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="p-3 w-full bg-transparent border-b border-b-[#fff] focus:border-none"
              required
            />
          </div>
          <div className="px-3 lg:w-1/2 mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 w-full bg-transparent border-b border-b-[#fff] focus:border-none"
              required
            />
          </div>
          <div className="px-3 w-full mb-3">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              className="w-full p-3 bg-transparent border-b border-b-[#fff] resize-none h-36"
              required
            ></textarea>
          </div>
          <div className="px-3 lg:w-2/3">
            <p className="text-sm text-gray-500">
              <span className="text-white">*</span> We promise not to disclose
              your personal information to third parties.
            </p>
          </div>
          <div className="px-3 lg:w-1/3">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-3 bg-white/5 rounded-2xl w-full text-center"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {success && (
            <p className="text-green-500 mt-4 w-full text-center">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
