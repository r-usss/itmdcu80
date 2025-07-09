"use client";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

interface Activity {
  image: string;
  act: string;
  detail: string;
}

interface ActivitiesCarouselProps {
  activities: Activity[];
}

const ActivitiesCarousel: React.FC<ActivitiesCarouselProps> = ({ activities }) => {
  const rawId = React.useId();
  const safeId = rawId.replace(/[:.]/g, "-");
  const glideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glide = new Glide(`#${safeId}`, {
      type: "slider",
      focusAt: "center",
      perView: 3,
      autoplay: 20000,
      animationDuration: 700,
      gap: 20,
      breakpoints: {
        1024: { perView: 2 },
        600: { perView: 1 },
      },
    });
    glide.mount();
    return () => glide.destroy();
  }, [safeId]);

  return (
    <div id={safeId} className="relative w-full z-0" ref={glideRef}>
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="flex whitespace-nowrap relative w-full p-2">
          {activities.map((item, index) => (
            <li key={index} className="inline-block w-1/3">
              <div className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                <figure className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.act}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </figure>
                <div className="card-body flex flex-col flex-grow p-6">
                  <h2 className="card-title text-xl font-bold mb-2">{item.act}</h2>
                  <p className="flex-grow text-gray-700">{item.detail}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div
        className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 pointer-events-none"
        data-glide-el="controls"
      >
        <button
          className="pointer-events-auto inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          {/* SVG for prev */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <title>prev slide</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>

        <button
          className="pointer-events-auto inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir=">"
          aria-label="next slide"
        >
          {/* SVG for next */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <title>next slide</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActivitiesCarousel;
