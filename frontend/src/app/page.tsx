'use client';
import {
  HandHeart,
  Users,
  Leaf,
  ArrowRight,
  Utensils,
  PackageCheck,
  Truck,
} from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HomePage() {
  const controls = useAnimation();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const countUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1, ease: 'easeOut' },
    }),
  };

  // For staggered fade-in with y movement
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: 'easeOut' } },
  });

  return (
    <div className="overflow-hidden font-sans antialiased bg-gradient-to-b from-green-50 via-lime-50 to-white text-gray-900">

      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?food,rescue')",
          willChange: 'transform',
          transformOrigin: 'center',
          animation: 'heroZoom 20s ease-in-out infinite alternate',
        }}
      >
        {/* Parallax overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          {/* Stagger hero lines */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
            }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-green-600 drop-shadow-lg"
          >
            Rescue Food.
          </motion.h1>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
            }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-green-600 drop-shadow-lg"
          >
            Restore Hope.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.7 } },
            }}
            className="text-xl md:text-2xl text-green-100 drop-shadow-md max-w-3xl mx-auto"
          >
            Bridging the gap between food surplus and hunger —{' '}
            <span className="font-semibold">one meal at a time</span>.
          </motion.p>

          <motion.a
            href="/donate"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 active:scale-95"
          >
            Get Started <ArrowRight className="w-6 h-6 animate-bounce" />
          </motion.a>
        </motion.div>

        {/* Scroll Down Mouse Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-green-300 select-none"
          aria-hidden="true"
        >
          <div className="w-10 h-16 border-2 border-green-400 rounded-full relative">
            <motion.div
              animate={{ y: [4, 10, 4] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-2 h-2 bg-green-400 rounded-full absolute top-3 left-1/2 -translate-x-1/2"
            />
          </div>
          <span className="mt-2 text-sm font-semibold tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>

      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="bg-white py-24 shadow-inner"
        aria-label="Statistics showing impact"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <Utensils className="w-12 h-12 text-green-600 mx-auto" />, label: "Meals Donated", value: "85,000+" },
            { icon: <Users className="w-12 h-12 text-green-600 mx-auto" />, label: "NGOs Supported", value: "120+" },
            { icon: <Leaf className="w-12 h-12 text-green-600 mx-auto" />, label: "Food Waste Saved", value: "60 Tons" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={countUp}
              className="bg-gradient-to-tr from-green-50 to-lime-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.05]"
            >
              {stat.icon}
              <h3 className="mt-5 text-4xl font-extrabold text-green-700 drop-shadow-sm">{stat.value}</h3>
              <p className="mt-1 text-lg text-gray-700 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-28 bg-gradient-to-br from-green-50 via-white to-lime-50">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-20">
          <motion.h2
            {...fadeInUp()}
            className="text-4xl md:text-5xl font-extrabold text-green-800 tracking-wide"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: <PackageCheck className="w-10 h-10 text-green-600" />,
                title: "1. Restaurants Donate",
                desc: "List extra food with all details. Fast, easy, and efficient."
              },
              {
                icon: <HandHeart className="w-10 h-10 text-green-600" />,
                title: "2. NGOs Request",
                desc: "Volunteers browse and request meals for distribution."
              },
              {
                icon: <Truck className="w-10 h-10 text-green-600" />,
                title: "3. Pickup & Deliver",
                desc: "Pickup and delivery to communities in need."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.3, duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-transform transform hover:-translate-y-1 hover:scale-[1.05]"
              >
                {step.icon}
                <h4 className="mt-6 text-2xl font-bold text-green-700">{step.title}</h4>
                <p className="mt-3 text-gray-700 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5, ease: 'easeOut' }}
        className="py-24 bg-green-700 text-white text-center px-6"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Be the reason someone eats today.
          </h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto text-green-200">
            Whether you're a restaurant or a volunteer — join us in building a zero-waste, hunger-free community.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-300 to-green-500 text-green-900 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:brightness-110 transition-transform transform hover:-translate-y-1 active:scale-95"
          >
            Start Donating <ArrowRight className="w-6 h-6 animate-pulse" />
          </a>
        </div>
      </motion.section>

      <style jsx>{`
        @keyframes heroZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
