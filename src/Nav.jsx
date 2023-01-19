import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/">All astros</NavLink>
      <NavLink to="/AstroCreate">Add new astro!</NavLink>
    </nav>
  )
}