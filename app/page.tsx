import Image from "next/image";


function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Home() {
  return (
    <section>
      <h1>scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}


// 'use client';

// const LoginButton = () => {
//   const openSite = () => {
//     window.open('http://www.example.com');
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//     }}>
//       <button onClick={openSite}>Вход при помощи Microsoft</button>
//     </div>
//   );
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <LoginButton />
//       </body>
//     </html>
//   )
// }
