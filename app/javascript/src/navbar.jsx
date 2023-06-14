import React from "react";
import logo from "./images/logo.png"


export default function Navbar() {
  return (
    <nav className="navbar bg-primary pt-3">
    <div className="mx-auto">
    <img src={logo} width="40" height="40" alt="Logo"/> 
    </div>
    </nav>

  )
}