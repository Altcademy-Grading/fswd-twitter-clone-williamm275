import React from "react";
import logo from "./images/logo.png"


export default function Navbar() {
  return (
    <nav className="navbar bg-primary pt-3">
    <div className="ms-2">
    <img src={logo} width="50" height="50" alt="Logo"/> 
    </div>
    </nav>

  )
}
