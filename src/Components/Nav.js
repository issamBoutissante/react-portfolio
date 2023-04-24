import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/formations" className="nav-link">
            Formations
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/experiences" className="nav-link">
            Expériences
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/project" className="nav-link">
            Projets
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/certifications" className="nav-link">
            Certifications
          </Link>
        </li>
      </ul>
    </nav>
  );
}
