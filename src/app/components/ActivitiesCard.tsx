import React from "react";

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
  return (
    <div className=" flex mt-5 mx-2">
      {status === topic && (
        <div className="w-3/6 bg-white dark:text-white dark:bg-gray-500 text-black rounded-xl text-left pl-3 ">
          <img
            className=" mb-2 mt-2 mr-10 float-left rounded-xl"
            src={image}
            alt={"pic"}
            width={96}
            height={96}
          />
          <p className="text-xl pt-3">{act}</p>
          <p>{detail}</p>
        </div>
      )}
    </div>
  );
}

export default ActivitiesCard;
