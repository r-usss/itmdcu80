"use client";
import React, { useState, useEffect } from "react";
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
      {users.map((content, dataIndex) => (
        <>
          <div 
        //   key={dataIndex}
          >
            <div className="inline-block mx-3">{content.id}</div>
            <div className="inline-block mx-3">{content.fname}</div>
            <div className="inline-block mx-3">{content.username}</div>
          </div>
        </>
        // {content.}
      ))}
    </>
  );
}
