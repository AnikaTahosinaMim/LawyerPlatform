"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const LawyerSection = ({ lawyers }) => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <h2 className="text-5xl font-bold mb-14">Top Rated Lawyers</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {lawyers.map((lawyer) => (
          <motion.div
            key={lawyer._id}
            variants={item}
            whileHover={{
              scale: 1.05,
              rotate: -1,
            }}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <img src={lawyer.photo} className="w-full h-72 object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{lawyer.name}</h3>

              <p className="text-cyan-400 mt-1">{lawyer.specialization}</p>

              <div className="flex justify-between mt-5 text-sm text-slate-400">
                <span>⭐ {lawyer.rating}</span>

                <span>{lawyer.experience}</span>
              </div>

              <button className="mt-6 w-full rounded-xl bg-cyan-500 py-3 hover:bg-cyan-400 transition">
                <Link href={`/lawyers/${lawyer._id}`}>View Profile</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LawyerSection;
