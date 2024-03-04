import React from "react";
import { FaCheck, FaParagraph, FaFileImage } from "react-icons/fa"; // Corrected Fa6 to Fa and import path based on standard react-icons usage
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { RxDividerHorizontal } from "react-icons/rx";
import { MdFormatListBulleted } from "react-icons/md";
import { TiAttachmentOutline } from "react-icons/ti";
import { TbListNumbers } from "react-icons/tb";

export default function Menu() {
    const options = [
        { name: "Task", icon: <FaCheck /> },
        { name: "Paragraph", icon: <FaParagraph /> },
        { name: "Heading 1", icon: <LuHeading1 /> },
        { name: "Heading 2", icon: <LuHeading2 /> },
        { name: "Heading 3", icon: <LuHeading3 /> },
        { name: "Divider", icon: <RxDividerHorizontal /> },
        { name: "Bullet list", icon: <MdFormatListBulleted /> },
        { name: "Numbered list", icon: <TbListNumbers /> }, // Assuming you use the same icon for demonstration
        { name: "Image", icon: <FaFileImage /> },
        { name: "Attachment", icon: <TiAttachmentOutline /> },
    ];

    return (
        <div className="bg-gray-800 text-white rounded-xl py-1">
            <ul>
                {options.map((option, index) => (
                    <li key={index} className="flex p-1 items-center hover:bg-gray-500 hover:cursor-pointer">
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
