'use client'
import React, { useState, useRef } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Menu from "./Menu";

export default function Editor() {
    const [showMenu, setShowMenu] = useState(false);
    const iconRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div style={{ position: 'relative' }} className="flex items-center p-2">
            {showMenu && <div className="absolute top-[-100px] left-[-120px] z-[1000]"><Menu /></div>}
            <div ref={iconRef} onClick={toggleMenu} className="cursor-pointer mr-2">
                <FaArrowRotateLeft />
            </div>
            <p>Meeting agenda</p>
        </div>
    );
}
