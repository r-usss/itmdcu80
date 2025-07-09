import Image from "next/image";
import imgemail from "/public/email.svg";
import instagram from "/public/instagram.svg";

interface MemberCardProps {
  role: string;
  name: string;
  nickname: string;
  email: string;
  ig: string;
  image: string;
}

export default function MemberCard({
  role,
  name,
  nickname,
  email,
  ig,
  image,
}: MemberCardProps) {
  return (
    <>
      {/* <div>
        Hello {name} {role} {nickname} {email} {ig} {image}
      </div> */}
      <div className="dark:border-none border-2 flex flex-col items-center pb-5 rounded-l-lg rounded-r-lg dark:text-dark dark:bg-purple bg-[#F5C3C5] shadow-xl">
        {role && <div className="text-xl">{role}</div>}
        <Image
          className=" rounded-full object-cover mb-2 mt-2  "
          src={image}
          alt={`${name}'s profile`}
          width={96}
          height={96}
        />
        <p>
          {name} ({nickname})
        </p>
        <p className="flex">
          <Image src={imgemail} alt="email" width={20} height={20} />
          {email}
        </p>
        {ig && (
          <p className="flex">
            <Image src={instagram} alt="instagram" width={25} height={25} />{" "}
            {ig}
          </p>
        )}
      </div>
    </>
  );
}
