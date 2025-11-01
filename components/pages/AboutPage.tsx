// components/pages/AboutPage.tsx
'use client';

import Navigation from '../Navigation';
import Footer from '../Footer';
import FadeInWrapper from '../FadeInWrapper';
import AnimatedImage from '../AnimatedImage';

export default function AboutPage() {
  return (
    <FadeInWrapper>
      <div className="dark:bg-black bg-white text-black dark:text-white px-5 md:px-20 min-h-screen flex flex-col">
        <Navigation />
        <div className="container mx-auto flex-grow">
          <h1 className="text-4xl pt-10 pb-8"><b>ABOUT ME</b></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 pb-20">
            {/* Left Column - Image */}
            <div className="flex justify-center items-start">
              <div className="bg-white dark:bg-neutral-900 p-5 pb-28 shadow-lg border border-gray-100 dark:border-neutral-800 hover:rotate-0 transition duration-500 -rotate-6 relative w-full max-w-sm">
                <div className="relative w-full aspect-square">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                    alt="Profile"
                    index={0}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover smooth-edges"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center">
                  <p className="text-gray-800 dark:text-slate-200 pb-7 text-6xl font-nothingyoucoulddo">
                    me
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <section className="font-normal text-center md:text-start mx-3 flex flex-col justify-center">
              <div className="block md:hidden mb-6">
                <p className="text-3xl font-serif font-bold mb-1">Hello there,</p>
                <p className="text-3xl font-serif font-bold mb-6">
                  I&apos;m Ahnaf <span className="animate-wave">👋</span>
                </p>
              </div>

              <p className="hidden md:block text-3xl font-serif font-bold mb-6">
                Hello there, I&apos;m Ahnaf Farooq<span className="animate-wave"></span>
              </p>

              <p className="mb-4 leading-relaxed">
                I&apos;m a San Francisco-based photographer with over 6 years of experience in capturing
                unforgettable moments. I specialize in creating images that are both visually striking and
                emotionally impactful, and I have developed a signature style that blends natural beauty with
                vibrant colors and bold compositions.
              </p>

              <p className="mb-4 leading-relaxed">
                When I&apos;m not behind the camera, you can find me exploring the city&apos;s diverse neighborhoods,
                trying out new restaurants, or spending time with my family and friends. I believe that every
                moment is an opportunity to experience something new and to create memories that will last a
                lifetime.
              </p>

              <p className="leading-relaxed">
                Thank you for taking the time to learn a little bit about me and my work. If you&apos;re interested
                in collaborating or would like to see more of my portfolio, please don&apos;t hesitate to get in
                touch. Let&apos;s work together to bring your vision to life!
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </FadeInWrapper>
  );
}