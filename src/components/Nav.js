import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/home" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-question" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
