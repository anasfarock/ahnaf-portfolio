// components/pages/ContactPage.jsx
"use client";

import { useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import FadeInWrapper from "../FadeInWrapper";
import AnimatedImage from "../AnimatedImage";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:info@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <FadeInWrapper>
      <div className="dark:bg-black bg-white text-black dark:text-white px-5 md:px-20 min-h-screen">
        <Navigation />
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-16 pb-20">
            <section className="col-span-2 md:col-span-1">
              <div className="max-w-screen-md">
                <h1 className="text-4xl pt-10 pb-8">
                  <b>CONTACT</b>
                </h1>

                <div className="space-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Let me know how I can help you"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Leave a comment..."
                      required
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="py-3 px-5 text-sm font-medium text-center bg-black dark:bg-white text-white dark:text-black rounded-lg sm:w-fit hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </section>
            <div className="col-span-2 md:col-span-1 flex relative">
              <div className="bg-white dark:bg-neutral-900 p-5 pb-20 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800 hover:rotate-0 transition duration-500 rotate-6 relative">
                <AnimatedImage
                  src="https://images.unsplash.com/reserve/yZfr4jmxQyuaE132MWZm_stagnes.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"
                  alt="Contact"
                  index={0}
                  className="flex flex-col aspect-square w-full object-cover h-auto max-h-full smooth-edges"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </FadeInWrapper>
  );
}
