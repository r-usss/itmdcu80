import { activitiesList } from "../constants/actlist";
export default function Activities() {
//import Image from "next/image";
//import syringeLogo from "/image/syringe-logo.webp";
  return (
    <>
    <div className="text-white dark:text-dark dark:bg-pink-400 " >

      <div className="text-2xl font-bold py-10">Recent Activities</div>

      {/* เสร็จแล้ว */}
      <strong > ทำแล้ว </strong>
      
      {activitiesList.map((actItem, actIndex) => (
        <div className=" flex mt-5 mx-2 inline-block">
          {actItem.status === "finished" && (
            <div className="w-3/6 bg-white dark:text-white dark:bg-gray-500 text-black rounded-xl text-left pl-3 ">
              <img 
            className=" mb-2 mt-2 mr-10 float-left rounded-xl"
            src={actItem.image}
            alt={"pic"}
            width={96} 
            height={96} 
            />
              <p className="text-xl pt-3">{actItem.act}</p>
              <p>{actItem.detail}</p>
        </div>
          )}
      </div>
        
      ))}

      {/* เสร็จแล้ว */}
      
      <strong className="text-left"> ทำอยู๋ </strong>
      
      {activitiesList.map((actItem, actIndex) => (
        <div className=" flex my-5 mx-2 inline-block">
          {actItem.status === "ongoing" && (
            <div className="w-3/6 bg-white dark:text-white dark:bg-gray-500 text-black rounded-xl text-left pl-3 ">
              <img 
            className=" mb-2 mt-2 mr-10 float-left rounded-xl"
            src={actItem.image}
            alt={"pic"}
            width={96} 
            height={96} 
            />
              <p className="text-xl pt-3">{actItem.act}</p>
              <p>{actItem.detail}</p>
            </div>
          )}
        </div>
        //flex flex-col
      ))}
      <strong > ทำต่อ </strong>
      {activitiesList.map((actItem, actIndex) => (
        <div className="flex mt-5 mx-2 inline-block">
          {actItem.status === "continue" && (
            <div className="w-3/6 bg-white dark:text-white dark:bg-gray-500 text-black rounded-xl text-left pl-3 ">
              <img 
            className=" mb-2 mt-2 mr-10 float-left rounded-xl"
            src={actItem.image}
            alt={"pic"}
            width={96} 
            height={96} 
            />
              <p className="text-xl pt-3">{actItem.act}</p>
              <p>{actItem.detail}</p>
            </div>
          )}
        </div>
        
      ))}
    </div>
    </>
  );
}
