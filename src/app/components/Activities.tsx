import { activitiesList } from "../constants/actlist";
import ActivitiesCard from "./ActivitiesCard";
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
      </div>
    </>
  );
}
