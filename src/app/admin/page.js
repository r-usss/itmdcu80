"use client";

import React, { useState, useEffect } from "react";
// import Image from "next/image";
import MemberCard from "../components/MemberCard";

export default function Page() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      // ใช้ชั่วคราวไปก่อน
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUsers(result);
      });
    // console.log("hello");
  }, []);
  return (
    <>
      <div className="mx-4 text-3xl">Admin</div>
      REST-API with fake data 
      <li href='https://www.melivecode.com/api/users'>https://www.melivecode.com/api/users</li>
      {JSON.stringify(users)}
      {users.map((content) => (
        <div key={content.id}>
          <div className="inline-block mx-3 w-4">{content.id}</div>
          <div className="inline-block mx-3 w-14">{content.fname}</div>
          <div className="inline-block mx-3 w-14">{content.lname}</div>
          <div className="inline-block mx-3 w-60">{content.username}</div>
          <img
            className="inline-block"
            src={content.avatar}
            height={50}
            width={50}
            alt={content.username}
          />
        </div>
      ))}

      <div className="mx-4 text-4xl">Preview</div>
      <div className="bg-white dark:text-white dark:bg-gray-500 px-10 pb-20 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-4">
        {users.map((content) => (
          <MemberCard
          key={content.id}
            role=""
            name={content.fname}
            nickname={content.lname}
            email={content.username}
            ig=""
            image=""
            //{content.avatar}
          />
        ))}
      </div>
    </>
  );
}
