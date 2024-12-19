import Image from "next/image";
import smcu from "/public/smcu.png";
//import /image/pic1.webp from "/image/pic1.webp";
//import moon from "/public/moon icon.png";
import email from "/public/email.svg";
import instagram from "/public/instagram.svg";

import { members2024 } from "../constants/memberslist";
export default function Members() {
  return (
    <>
      <div className="font-bold text-2xl bg-white dark:text-white dark:bg-gray-500">
        Acadaemic Year {members2024.year}
      </div>
      <div className="font-bold text-xl bg-white dark:text-white dark:bg-gray-500 py-2">
        Executive team ยังใส่ไม่ครบ
      </div>
      <div className="bg-white dark:text-white dark:bg-gray-500 px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-4">
        {members2024.sections.map((item, index) => (
          <>
            {item.role && (
                <div
                  className="flex flex-col items-center pb-5 rounded-l-lg rounded-r-lg dark:text-dark dark:bg-pink-400 bg-white shadow-xl"
                  key={item.name}
                >
                  <div className="text-xl">{item.role}</div>
                  <img
                    className=" rounded-full object-cover mb-2 mt-2  "
                    src={item.image}
                    alt={`${item.name}'s profile`}
                    width={96}
                    height={96}
                  />
                  <p>
                    {item.name} ({item.nickname})
                  </p>
                  <p className="flex">
                    <Image src={email} alt="email" width={20} height={20} />
                    {item.email}
                  </p>
                  {item.ig && (
                    <p className="flex">
                      <Image
                        src={instagram}
                        alt="instagram"
                        width={25}
                        height={25}
                      />{" "}
                      {item.ig}
                    </p>
                  )}
                </div>
              
            )}
          </>
        ))}
      </div>

      <div className="font-bold text-xl bg-white dark:text-white dark:bg-gray-500 py-2">
        Core team
      </div>
      <div className="bg-white dark:text-white dark:bg-gray-500 px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-4">
        {members2024.sections.map((item, index) => (
          <>
            {!item.role && (
          <div
            className="flex flex-col pb-5 rounded-l-lg rounded-r-lg dark:text-dark dark:bg-pink-400 bg-white shadow-xl items-center"
            key={item.name}
          >
            <img
              className=" rounded-full object-cover mb-2 mt-2  "
              src={item.image}
              alt={`${item.name}'s profile`}
              width={96}
              height={96}
            />
            <p>
              {item.name} ({item.nickname})
            </p>
            <p className="flex">
              <Image src={email} alt="email" width={20} height={20} />
              {item.email}
            </p>
            {item.ig && (
              <p className="flex">
                <Image src={instagram} alt="instagram" width={25} height={25} />{" "}
                {item.ig}
              </p>
            )}
          </div>
          )}
          </>
        ))}
      </div>
    </>
  );
}
//pl-10 mx-5 pt-5
