import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
  <header>
    <h1>#VanLife</h1>
  
  <nav>
  <Link to="about">Home</Link>
  </nav>
  </header>
  );
}