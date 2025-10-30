"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../Navigation";
import Footer from "../Footer";
import FadeInWrapper from "../FadeInWrapper";
import AnimatedImage from "../AnimatedImage";

export default function HomePage() {
  return (
    <FadeInWrapper>
      <div className="dark:bg-black bg-white text-black dark:text-white px-5 md:px-20 min-h-screen">
        <Navigation />
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-blue-500">Ahnaf Farooq</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A passionate designer and developer creating beautiful, functional digital experiences. I specialize in building modern web applications and crafting compelling visual solutions.
              </p>
              <div className="flex gap-4 mb-8">
                <Link
                  href="/portfolio"
                  className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition duration-300"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white dark:bg-neutral-900 p-6 shadow-lg border border-gray-100 dark:border-neutral-800 rounded-lg">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Hero"
                  index={0}
                  className="w-full h-full object-cover rounded aspect-square"
                />
              </div>
            </div>
          </div>

          {/* About Preview Section */}
          <div className="py-20 border-t border-gray-200 dark:border-neutral-800">
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

          {/* CTA Section */}
          <div className="py-20 border-t border-gray-200 dark:border-neutral-800">
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
        <Footer />
      </div>
    </FadeInWrapper>
  );
}