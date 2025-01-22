"use client";

import React, { useState, useEffect } from "react";
// import Image from "next/image";
import Link from "next/link";
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

  //delete
  const handleDelete = (id) => {
    fetch("https://www.melivecode.com/api/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message)
        window.location.reload();
      });
  };
  return (
    <>
      <div className="mx-4 text-3xl">Admin</div>
      REST-API with fake data
      <Link href="https://www.melivecode.com/api/users" className="m-10">
        https://www.melivecode.com/api/users
      </Link>
      {/* {JSON.stringify(users)} */}
      <br />
      <br />
      <Link
        href="/admin/createdata"
        className="m-10 p-2 bg-slate-300 rounded-lg hover:bg-slate-400"
      >
        Create Data
      </Link>
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
          <button
            onClick={() => handleDelete(content.id)}
            className="bg-red-400 rounded-lg px-3 m-2"
          >
            Delete
          </button>
          <button className="bg-amber-200 rounded-lg px-3 m-2">Edit</button>
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
