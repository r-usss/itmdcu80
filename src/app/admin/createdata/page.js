"use client";

import { Result } from "postcss";

export default function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      fname: event.target.fname.value,
      lname: event.target.lname.value,
      username: event.target.username.value,
      password: "1234",
      email: "cat.chat@melivecode.com",
      avatar: "https://www.melivecode.com/users/cat.png",
    };
    fetch("https://www.melivecode.com/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert(result.message)
        if(result.stayus==='ok'){
          window.location.href=''
        }
      });
    // console.log(data)
    // console.log("Firstname:", event.target.fname.value);
    // console.log("Lastname:", event.target.lname.value);
    // console.log("Username:", event.target.username.value);
    // console.log("Hello");
  };

  return (
    <div>
      <div className="text-4xl">Create Data</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Firstname"
            id="fname"
            name="firstname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Lastname"
            id="lname"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
