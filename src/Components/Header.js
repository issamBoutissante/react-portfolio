import React from "react";
import myimage from "../assets/myimage.png";

export default function Header() {
  return (
    <header className="header">
      <div className="text-center mb-4">
        <img src={myimage} alt="me" className="rounded-circle profile-img" />
      </div>
      <h1>BOUTISSANTE Issam</h1>
      <h2>Étudiant ingénieur en 4ème année IIR</h2>
    </header>
  );
}
