"use client";

import { motion } from "framer-motion";
import Link from "next/link";


const Hero = () => {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -top-20 -left-20"/>

      <div className="absolute w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full bottom-0 right-0"/>

      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:.8}}
          className="text-6xl font-black leading-tight"
        >
          Find Your
          <span className="text-cyan-400"> Trusted </span>
          Lawyer
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.3}}
          className="mt-6 text-slate-400 max-w-xl"
        >
          Connect with verified lawyers across Bangladesh.
          Book consultation instantly.
        </motion.p>

        <motion.button
          whileHover={{scale:1.08}}
          whileTap={{scale:.95}}
          className="mt-10 px-8 py-4 rounded-xl bg-cyan-500 font-semibold"
        >
          <Link href={"/lawyers"}>Explore Lawyers</Link>
        </motion.button>

      </div>
      


    </section>
  );
};

export default Hero;