"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
const SliderControlsInside: React.FC = () => {
  const list = [
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Card Title 1",
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
      link: "#",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Card Title 2",
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
      link: "#",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Card Title 3",
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
      link: "#",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Card Title 4",
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
      link: "#",
    },
  ];

  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 20,
      breakpoints: {
        1024: { perView: 2 },
        600: { perView: 1 },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="relative w-full glide-01 z-0">
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="flex whitespace-nowrap relative w-full p-0">
          {list.map((item, index) => (
            <li key={index} className="inline-block w-1/3 px-4">
              <a
                href={item.link}
                className="card bg-base-100 shadow-md rounded-lg overflow-hidden flex flex-col"
              >
                <figure>
                  <Image
                    width={500}
                    height={500}
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover h-48"
                  />
                </figure>
                <div className="card-body flex flex-col flex-grow p-6">
                  <h2 className="card-title text-xl font-bold mb-2">
                    {item.title}
                  </h2>
                  <p className="flex-grow text-gray-700">{item.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                      Buy Now
                    </button>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div
        className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2"
        data-glide-el="controls"
      >
        <button
          className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir="<"
          aria-label="prev slide"
        >
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
          className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir=">"
          aria-label="next slide"
        >
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

export default SliderControlsInside;
