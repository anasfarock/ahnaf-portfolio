"use client";

import Link from "next/link";
import Navigation from "../Navigation";
import Footer from "../Footer";
import FadeInWrapper from "../FadeInWrapper";

export default function HomePage() {
  return (
    <FadeInWrapper>
      <div className="dark:bg-black bg-white text-black dark:text-white min-h-screen flex flex-col">
        <Navigation transparent />
        <div className="flex-1 flex flex-col">
          {/* Hero Section with Full-Screen Video Background */}
          <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="./images/hero.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

            {/* Hero Content */}
            <div className="relative z-10 px-5 md:px-20 py-50 w-full sm:py-20 lg:py-55 md:py-40">
              <div className="container mx-auto">
                <div className="flex flex-col justify-center max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                    Hi, I'm <span className="text-blue-400">Ahnaf Farooq</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                    A passionate designer and developer creating beautiful, functional digital experiences. I specialize in building modern web applications and crafting compelling visual solutions.
                  </p>
                  <div className="flex gap-4 mb-8">
                    <Link
                      href="/portfolio"
                      className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:opacity-90 transition duration-300"
                    >
                      View My Work
                    </Link>
                    <Link
                      href="/contact"
                      className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
                    >
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Preview Section */}
          <div className="px-5 md:px-20 py-20 border-t border-gray-200 dark:border-neutral-800">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Design</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creating visually stunning and user-friendly interfaces that engage and inspire users.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building robust and scalable web applications using modern technologies and best practices.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Constantly exploring new ideas and technologies to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-block px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
              >
                Learn More About Me
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="px-5 md:px-20 py-20 border-t border-gray-200 dark:border-neutral-800">
            <div className="container mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg p-12 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Let's create something amazing. Get in touch and let's discuss your project.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:opacity-90 transition duration-300"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </FadeInWrapper>
  );
}