import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <div className="navbarContainer">
      <Link className="navButton" to="/anime/Seven Deadly Sins">Seven Deadly Sins</Link>
      <Link className="navButton" to="/anime/Attack On Titan">Attack On Titan</Link>
      <Link className="navButton" to="/anime/My hero Academia">My Hero Academia</Link>
      <Link className="navButton" to="/anime/Naruto Shippuden">Naruto Shippuden</Link>
    </div>
  )
}