"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Star } from "lucide-react";

const LawyerCard = ({ lawyer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
    >
      <Link href={`/lawyers/${lawyer._id}`}>
        <div className="group rounded-3xl overflow-hidden bg-white border shadow-sm hover:shadow-2xl duration-300">
          <div className="relative">
            <Image
              src={lawyer.photo}
              width={500}
              height={500}
              alt={lawyer.name}
              className="h-72 w-full object-cover group-hover:scale-110 duration-500"
            />

            {lawyer.status === "Busy" && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                Busy
              </span>
            )}
          </div>

          <div className="p-5">
            <h2 className="font-bold text-xl">{lawyer.name}</h2>

            <div className="flex items-center gap-2 mt-2 text-blue-600">
              <Briefcase size={17} />

              {lawyer.specialization}
            </div>

            <div className="flex items-center gap-2 mt-2 text-gray-500">
              <MapPin size={16} />

              {lawyer.location}
            </div>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star fill="currentColor" size={18} />

                {lawyer.rating}
              </div>

              <h3 className="font-bold text-lg text-blue-600">
                ৳ {lawyer.consultationFee}
                <span className="text-sm font-normal text-gray-500">/hour</span>
              </h3>
            </div>

            <button
              className="
              w-full
              mt-6
              py-3
              rounded-xl
              bg-blue-600
              text-white
              hover:bg-blue-700
              duration-300
            "
            >
              <Link href={`/lawyers/${lawyer._id}`}>View Profile</Link>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LawyerCard;
