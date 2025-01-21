"use client";
import React from "react";

function page() {
  const handleSubmit = (event) => {
    event.preventDefault(); //ไม่ให้reloadตอน submit
    const data = {
      fname: "Cat",
      lname: "Chat",
      username: "cat.chat@melivecode.com",
      password: "1234",
      email: "cat.chat@melivecode.com",
      avatar: "https://www.melivecode.com/users/cat.png",
    };
    fetch("https://www.melivecode.com/api/users/create");
    // console.log(data)
    console.log(event.target.fname.value)
    console.log('hello')
  };
  return (
    <div>
      <div className="mx-4 text-4xl">Create data</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="First name" id="fname" name="fname" />
        </div>
      </form>
      <form>
        <div>
          <input type="text" placeholder="Last name" id="lname" name="lname" />
        </div>
      </form>
      <form>
        <div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
          />
        </div>
      </form>
    </div>
  );
}

export default page;
