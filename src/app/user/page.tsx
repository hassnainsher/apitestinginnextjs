// import React from 'react';
// // interface User  {
// //   name: string;
// //   age: number;
// //   mail: string;
// // }
// export async function User(){
//     const responser = await fetch('http://localhost:3000/api/user');
//     const data = await responser.json();
//     return data;
// }

// export default async function page() {
//     const users = await User();
//     const test = users[0];
//     // console.log(test)
    
//   return (
//     <div>
//       <h1>hello world jjj {test.name}</h1>

//     </div>
//   )
// }
import React from 'react'
export async function UserData(){
  const response = await fetch('http://localhost:3000/api/user');
  const data = await response.json();
  return data
}

export default async function page() {
  const [users] = await UserData();
  console.log(users);
  
  return (
    <div>
      {users.name}
    </div>
  )
}
