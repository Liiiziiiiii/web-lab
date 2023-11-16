import React, { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom"
import Logo from "../Asserts/logo.png"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    ListItem,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "Catalog",
            icon: <InfoIcon />,
        },
        {
            text: "Cart",
            icon: <CommentRoundedIcon />,
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
        },
    ];
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <a href="">Cart</a>
                <a href="">Contact</a>
                <a href="">
                    <BsCart2 className="navbar-cart-icon" />
                </a>
                <button className="primary-button">Buy Now</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

        </nav>
    );
};

export default Navbar;