//import /image/pic1.webp from "/image/pic1.webp";
//import moon from "/public/moon icon.png";

import { members2024 } from "../constants/memberslist";
import MemberCard from "./MemberCard";
export default function Members() {
  return (
    <>
      <div className="font-bold text-2xl bg-white dark:text-white dark:bg-darkerpurple">
        Acadaemic Year {members2024.year}
      </div>
      <div className="font-bold text-xl bg-white dark:text-white dark:bg-darkerpurple py-2">
        Executive team ยังใส่ไม่ครบ
      </div>
      <div className="bg-white dark:text-white dark:bg-darkerpurple px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-4">
        {members2024.sections.map((item, index) => (
          <>
            {item.role && (
              <MemberCard
                role={item.role}
                name={item.name}
                nickname={item.nickname}
                email={item.email}
                ig={item.ig}
                image={item.image}
              />
            )}
          </>
        ))}
      </div>
      <div className="font-bold text-xl bg-white dark:text-white dark:bg-darkerpurple py-2">
        Core team
      </div>
      <div className="bg-white dark:text-white dark:bg-darkerpurple px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-4">
        {members2024.sections.map((item, index) => (
          <>
            {!item.role && (
              <MemberCard
                role={item.role}
                name={item.name}
                nickname={item.nickname}
                email={item.email}
                ig={item.ig}
                image={item.image}
              />
            )}
          </>
        ))}
      </div>
      
    </>
  );
}
//pl-10 mx-5 pt-5
