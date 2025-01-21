"use client";
import React, { useState, useEffect } from "react";
export default function Page() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setUsers(result)
      });
    // console.log("hello");
  }, []);
  return (
    <>
      <div>Admin</div>
      {JSON.stringify(users)}
    </>
  );
}
