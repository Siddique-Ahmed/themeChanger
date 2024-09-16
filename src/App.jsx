import React, { useContext } from "react";
import ThemeContextProvider, { ThemeContext } from "./assets/ThemeContext";
import Card from "./assets/Card";
import Button from "./assets/Button";

function App() {
  return (
    <ThemeContextProvider>
      <MainContent />
    </ThemeContextProvider>
  );
}
function MainContent() {
  const { theme } = useContext(ThemeContext);

  const userStatus = [
    {
      username: "Siddique",
      desc: "hello I'am Siddique Ahmed , A passionate Frontend Developer",
      img: "https://images.unsplash.com/photo-1678286742832-26543bb49959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      username: "Samar",
      desc: "hello I'am Samar Raza , A passionate Frontend Developer",
      img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltZ3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      username: "Shahab",
      desc: "hello I'am Shahab Ghori , A passionate Frontend Developer",
      img: "https://images.unsplash.com/photo-1523307730650-594bc63f9d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGUlMjBpbWdzfGVufDB8fDB8fHww",
    },
    {
      username: "Shoib",
      desc: "hello I'am Shoib Khalid , A passionate Frontend Developer",
      img: "https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      username: "Sheheryar",
      desc: "hello I'am Sheheryar Ahmed , A passionate Frontend Developer",
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      username: "Inam",
      desc: "hello I'am Inam Khan , A passionate Frontend Developer",
      img: "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      username: "faisal ",
      desc: "hello I'am Faisal Malik , A passionate Frontend Developer",
      img: "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div
      style={{
        background: theme === "light" ? "white" : "black",
      }}
      className="container"
    >
      <Button />
      <Card data={userStatus} />
    </div>
  );
}

export default App;
