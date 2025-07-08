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
