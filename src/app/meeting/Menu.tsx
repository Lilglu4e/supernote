import React, { useState } from "react";
import { FaCheck, FaParagraph, FaFileImage } from "react-icons/fa";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { RxDividerHorizontal } from "react-icons/rx";
import { MdFormatListBulleted } from "react-icons/md";
import { TiAttachmentOutline } from "react-icons/ti";
import { TbListNumbers } from "react-icons/tb";

interface MenuProps {
  onSelect: (format: string) => void;
  menuSelectionIndex: number; // Added this line
}
interface MenuOption {
  name: string;
  icon: JSX.Element;
}

const Menu: React.FC<MenuProps> = ({ onSelect, menuSelectionIndex }) => {
  // Option structure is now enforced by TypeScript
  const options: MenuOption[] = [
    { name: "Task", icon: <FaCheck /> },
    { name: "Paragraph", icon: <FaParagraph /> },
    { name: "Heading 1", icon: <LuHeading1 /> },
    { name: "Heading 2", icon: <LuHeading2 /> },
    { name: "Heading 3", icon: <LuHeading3 /> },
    { name: "Divider", icon: <RxDividerHorizontal /> },
    { name: "Bullet List", icon: <MdFormatListBulleted /> }, // Note the capitalization to match your other uses
    { name: "Numbered List", icon: <TbListNumbers /> }, // Ditto
    { name: "Image", icon: <FaFileImage /> },
    { name: "Attachment", icon: <TiAttachmentOutline /> },
  ];

  return (
    <div className="bg-gray-800 text-white rounded-xl py-3 text-lg">
      <ul>
        {options.map((option, index) => (
          <li key={index} className={`flex p-1 items-center hover:cursor-pointer ${index === menuSelectionIndex ? 'bg-gray-500' : ''}`} 
            onClick={() => onSelect(option.name)}
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
};

export default Menu;
