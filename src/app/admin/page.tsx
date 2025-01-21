"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
      <div className="mx-4">Admin</div>
      {/* {JSON.stringify(users)} */}
      {users.map((content) => (
        <div key={content.id}>
          <div className="inline-block mx-3 w-4">{content.id}</div>
          <div className="inline-block mx-3 w-14">{content.fname}</div>
          {/* <div className="inline-block mx-3 w-14">{content.lname}</div> */}
          <div className="inline-block mx-3 w-60">{content.username}</div>
          <img
          className="inline-block"
            src={content.avatar}
            height={50}
            width={50}
            alt={content.username}
          ></img>
        </div>
        // {content.}
      ))}
    </>
  );
}
