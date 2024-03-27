import React, { useRef, useEffect, useState } from "react";
import { FaCheck, FaParagraph, FaFileImage } from "react-icons/fa";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { RxDividerHorizontal } from "react-icons/rx";
import { MdFormatListBulleted } from "react-icons/md";
import { TiAttachmentOutline } from "react-icons/ti";
import { TbListNumbers } from "react-icons/tb";

export default function Menu({onSelect}) {
    // const [isVisible, setIsVisible] = useState(true); // Assuming you want to control the visibility


    const options = [
        { name: "Task", icon: <FaCheck /> },
        { name: "Paragraph", icon: <FaParagraph /> },
        { name: "Heading 1", icon: <LuHeading1 /> },
        { name: "Heading 2", icon: <LuHeading2 /> },
        { name: "Heading 3", icon: <LuHeading3 /> },
        { name: "Divider", icon: <RxDividerHorizontal /> },
        { name: "Bullet list", icon: <MdFormatListBulleted /> },
        { name: "Numbered list", icon: <TbListNumbers /> },
        { name: "Image", icon: <FaFileImage /> },
        { name: "Attachment", icon: <TiAttachmentOutline /> },
    ];

    // Use the isVisible state to control the rendering of the menu
    return (
        <div className="bg-gray-800 text-white rounded-xl py-3 text-lg">
            <ul>
                {options.map((option, index) => (
                    <li key={index} className="flex p-1 items-center hover:bg-gray-500 hover:cursor-pointer"
                        onClick={() => onSelect(option.name)} // Add this line
                    >
                        <div className="text-gray-700">
                            {option.icon}
                        </div>
                        <span className="ml-2">{option.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
