import { activitiesList } from "../constants/actlist";
import ActivitiesCard from "./ActivitiesCard";
export default function Activities() {
  //import Image from "next/image";
  //import syringeLogo from "/image/syringe-logo.webp";
  return (
    <>
      <div className="text-white dark:text-dark dark:bg-pink-400 ">
        <div className="text-2xl font-bold py-10">Recent Activities</div>

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
        <strong> ทำแล้ว </strong>

        {activitiesList.map((actItem, actIndex) => (
          <ActivitiesCard
            status={actItem.status}
            image={actItem.image}
            act={actItem.act}
            detail={actItem.detail}
            topic="finished"
          />
        ))}

        {/* ทำอยู่ */}

        <strong className="text-left"> ทำอยู่ </strong>

        {activitiesList.map((actItem, actIndex) => (
          <ActivitiesCard
            status={actItem.status}
            image={actItem.image}
            act={actItem.act}
            detail={actItem.detail}
            topic="ongoing"
          />
        ))}
        <strong> ทำต่อ </strong>
        {activitiesList.map((actItem, actIndex) => (
          <ActivitiesCard
            status={actItem.status}
            image={actItem.image}
            act={actItem.act}
            detail={actItem.detail}
            topic="continue"
          />
        ))}
      </div>
    </>
  );
}
