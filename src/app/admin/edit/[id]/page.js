// "use client";
// // import { Result } from "postcss";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// export default function Edit({ params }) {
//   const [user, setUser] = useState([]
//   //   {
//   //   id: 0,
//   //   fname: "",
//   //   lname: "",
//   //   username: "",
//   //   email: "",
//   //   avatar: "",
//   // }
// );
//   useEffect(() => {
//     fetch("https://www.melivecode.com/api/users/" + params.id)
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         setUser(result.user);
//       });
//   }, []);
//   const handleSubmit=(event)=>{
//     event.preventDefault()//ไม่ให้ refresh
//     console.log(user)
//     fetch('https://www.melivecode.com/api/users/update',{
//       method:'PUT',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user)
//     })
//     .then(res=>res.json())
//     .then(result=>{
//       alert(result.message)
//     })
//   }
//   return (
//     <div>
//       <div className="text-4xl">Edit</div>
//       {/* {params.id} */}
//       {/* {JSON.stringify(user)} */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Firstname"
//             id="fname"
//             name="firstname"
//             value={user.fname}
//             onchange //แก้ไขค่า
//             onChange={(event)=>{
//               setUser((user)=>({
//                 ...user,
//                 fname:event.target.value
//               }))
//             }}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Lastname"
//             id="lname"
//             name="lastname"
//             value={user.lname}
//             onChange={(event)=>{
//               setUser((user)=>({
//                 ...user,
//                 lname:event.target.value
//               }))
//             }}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             id="username"
//             name="username"
//             value={user.username}
//             onChange={(event)=>{
//               setUser((user)=>({
//                 ...user,
//                 username:event.target.value
//               }))
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           className="p-2 bg-slate-300 rounded-lg hover:bg-slate-400"
//         >
//           Submit
//         </button>
//       </form>
//       <Link href='/admin' className="p-2 bg-slate-300 rounded-lg hover:bg-slate-400">Back</Link>
//     </div>
//   );
// }
