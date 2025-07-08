import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import Glide from "@glidejs/glide";

interface ActivitiesCardProps {
  status: string;
  image: string;
  act: string;
  detail: string;
  topic: string;
}

function ActivitiesCard({
  status,
  image,
  act,
  detail,
  topic,
}: ActivitiesCardProps) {
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
          {status === topic && (
            <li className="inline-block w-1/3 px-4">
              <a
                href={"#"}
                className="card bg-base-100 shadow-md rounded-lg overflow-hidden flex flex-col"
              >
                <figure>
                  <Image
                    width={500}
                    height={500}
                    src={image}
                    alt={act}
                    className="w-full object-cover h-48"
                  />
                </figure>
                <div className="card-body flex flex-col flex-grow p-6">
                  <h2 className="card-title text-xl font-bold mb-2">
                    {act}
                  </h2>
                  <p className="flex-grow text-gray-700">{detail}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                      Buy Now
                    </button>
                  </div>
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ActivitiesCard;
