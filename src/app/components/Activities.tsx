import React from "react";
import { activitiesList } from "../constants/actlist";
import ActivitiesCarousel from "./ActivitiesCard";
import Image from "next/image";
export default function Activities() {
  return (
    <div className="text-black bg-[#F5C3C5] dark:text-white dark:bg-purple">
      <h2 className="text-2xl font-bold py-5 px-5">ทำแล้ว (Finished)</h2>
      <div className="text-lg  w-full h-[30rem] relative p-10">
        <ActivitiesCarousel activities={activitiesList.filter(a => a.status === "finished")} />
      </div>


      <h2 className="text-2xl font-bold py-10 px-5 relative z-10">ทำเสร็จ (Ongoing)</h2>
      <div
        className="text-lg w-full h-[30rem] bg-cover bg-center relative p-10"
        style={{ backgroundImage: `url('/image/bgact.jpg')` }}
      >
        <ActivitiesCarousel activities={activitiesList.filter(a => a.status === "ongoing")} />
      </div>

      <h2 className="text-2xl font-bold py-5 px-5">ทำอยู่ (Continue)</h2>
      <div className="text-lg  w-full h-[30rem] relative p-10">
        <ActivitiesCarousel activities={activitiesList.filter(a => a.status === "continue")} />
      </div>
    </div>
  );
}
