import React from "react";
import {NavbarLink} from "../NavbarLink/NavbarLink";
import { routes } from "../../pages/index";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="navbar">
        <div className="homeNav"><NavbarLink label="Home" to={routes.home} /></div>
        <div className="favoriteNav"><NavbarLink label="Favorite" to={routes.favorite} /></div>

    </div>
  );
};
