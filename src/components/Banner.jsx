/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/refs */
"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const banners = [
  "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1694476607280-57d5dc52e766?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661329930662-19a43503782f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/538235237/photo/pretty-lawyer-looking-at-camera-in-the-law-library.webp?a=1&b=1&s=612x612&w=0&k=20&c=AywiGttvZ7JeGOn6_mAzU18DlBtSkwA5CqpeRALXJ88=",
  "https://media.istockphoto.com/id/1405751400/photo/young-couple-and-their-lawyers-taking-about-separation-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z8-Ayw5dHvdb922AahdUisi2_WGV5ary29fMT9bty_o=",
];

export default function BannerSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="mx-auto mt-4 max-w-7xl px-4">
      <div
        className="relative overflow-hidden rounded-3xl shadow-xl"
        ref={emblaRef}
      >
        <div className="flex">
          {banners.map((banner, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-[250px] w-full object-cover sm:h-[350px] md:h-[500px] lg:h-[600px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-6 md:px-12 text-white">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
                    Trusted Legal Services
                  </p>

                  <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Find The Right Lawyer For Your Case
                  </h1>

                  <p className="mt-4 max-w-lg text-sm text-gray-200 md:text-lg">
                    Browse experienced lawyers by specialization, compare
                    profiles, and book legal consultations with confidence.
                  </p>

                  <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
                    <Link href={"/Explore-Lawyers"}>Browse Lawyers</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:scale-105 md:flex"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:scale-105 md:flex"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`transition-all ${
                selectedIndex === index
                  ? "h-3 w-8 rounded-full bg-white"
                  : "h-3 w-3 rounded-full bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-10">{/* <Homepage></Homepage> */}</div>
    </section>
  );
}
