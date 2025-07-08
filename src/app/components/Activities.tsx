import { activitiesList } from "../constants/actlist";
import ActivitiesCard from "./ActivitiesCard";
import Image from "next/image";
import Glide from "./glide";
export default function Activities() {
  //import Image from "next/image";
  //import syringeLogo from "/image/syringe-logo.webp";
  return (
    <>
      <div className="text-white dark:text-dark dark:bg-darkpurple ">
        <div className="text-white text-2xl font-bold py-10">Recent Activities</div>

        {/* test */}
        {/* {activitiesList.map((actItem, actIndex) => (
          <ActivitiesCard
            status={actItem.status}
            image={actItem.image}
            act={actItem.act}
            detail={actItem.detail}
            topic="finished"
          />
        ))} */}

        {/* เสร็จแล้ว */}

        <div className="text-white text-2xl font-bold py-10">ทำแล้ว</div>
        {activitiesList.map((actItem, actIndex) => (
          <ActivitiesCard key={actIndex}
            status={actItem.status}
            image={actItem.image}
            act={actItem.act}
            detail={actItem.detail}
            topic="finished"
          />
        ))}
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



      {/* ทำอยู่ */}

      <div className="text-white text-2xl font-bold py-10">ทำเสร็จ</div>

      {activitiesList.map((actItem, actIndex) => (
        <ActivitiesCard key={actIndex}
          status={actItem.status}
          image={actItem.image}
          act={actItem.act}
          detail={actItem.detail}
          topic="ongoing"
        />
      ))}
      <div className="text-white text-2xl font-bold py-10">ทำอยู่</div>
      {activitiesList.map((actItem, actIndex) => (
        <ActivitiesCard key={actIndex}
          status={actItem.status}
          image={actItem.image}
          act={actItem.act}
          detail={actItem.detail}
          topic="continue"
        />
      ))}
      {/* <div className="carousel rounded-box">
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Burger"
            width={500}
            height={500}
          /></div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger"
            width={500}
            height={500}
          /></div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger"
            width={500}
            height={500}
          /></div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger"
            width={500}
            height={500}
          /></div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger"
            width={500}
            height={500}
          /></div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Burger"
            width={500}
            height={500}
          /></div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Burger"
            width={500}
            height={500}
          /></div>
      </div> */}
      <Glide />
    </>
  );
}
