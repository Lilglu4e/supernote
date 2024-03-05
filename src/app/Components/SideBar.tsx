'use client'
import React, { useState } from 'react';
import { FaInbox, FaCalendarDay, FaTasks } from 'react-icons/fa';
import { BiSolidMessageRoundedDetail } from 'react-icons/bi';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { TbSquarePlus2, TbLayoutSidebar} from 'react-icons/tb';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { PiNotePencil } from 'react-icons/pi';
// Correct the import paths according to your project setup

type SidebarItem = 'inbox' | 'today' | 'tasks' | 'messages' | 'list' | 'work';

const SideBarItem = ({
  onClick,
  isSelected,
  icon,
  label,
}: {
  onClick: () => void;
  isSelected: boolean;
  icon: JSX.Element;
  label: string;
}) => (
  <div
    onClick={onClick}
    className={`flex items-center px-5 py-1 border-r-2 hover:bg-gray-700 hover:bg-opacity-50 ${
      isSelected ? 'bg-gray-700 border-red-500' : 'border-transparent'
    } cursor-pointer transition duration-150 ease-in-out`}
  >
    {icon}
    <p className="ml-2 text-lg truncate">{label}</p>
  </div>
);

export default function SideBar() {
  const [selectedItem, setSelectedItem] = useState<SidebarItem | ''>('');
  const [isWorkExpanded, setWorkExpanded] = useState(false);

  const handleSelect = (item: SidebarItem) => {
    if (item === 'work') {
      setWorkExpanded(!isWorkExpanded); // Toggle work section specifically
    } else {
      setSelectedItem(selectedItem === item ? '' : item);
      setWorkExpanded(false); // Collapse work section if another item is selected
    }
  };

  return (
    <div className="flex flex-col z-0 bg-gray-900 text-white h-screen overflow-auto text-sm rounded-lg shadow-md flex-grow-1/6">
        <div
            className={`flex justify-end px-5 py-4 border-r-4 ${
            false ? 'bg-gray-700 border-red-500' : 'border-transparent'
            } text-lg cursor-pointer transition duration-150 ease-in-out`}
        >
        <TbLayoutSidebar className="text-red-500" />
      </div>
      <a href='./meeting'>
            <SideBarItem
              onClick={() => handleSelect('inbox')}
              isSelected={selectedItem === 'inbox'}
              icon={<FaInbox className="text-red-500" />}
              label="Inbox"
            />
      </a>
      <SideBarItem
        onClick={() => handleSelect('today')}
        isSelected={selectedItem === 'today'}
        icon={<FaCalendarDay className="text-red-500" />}
        label="Today"
      />
      <SideBarItem
        onClick={() => handleSelect('tasks')}
        isSelected={selectedItem === 'tasks'}
        icon={<FaTasks className="text-red-500" />}
        label="Tasks"
      />
      <SideBarItem
        onClick={() => handleSelect('messages')}
        isSelected={selectedItem === 'messages'}
        icon={<BiSolidMessageRoundedDetail className="text-red-500" />}
        label="Messages"
      />
      <div className={`flex items-center px-5 py-1 border-r-2 hover:bg-gray-700 hover:bg-opacity-50 ${
           false ? 'bg-gray-700 border-red-500' : 'border-transparent'
           } cursor-pointer transition duration-150 ease-in-out text-gray-500`}>
        List
      </div>

      <div onClick={() => handleSelect('work')}
           className={`px-5 py-2 cursor-pointer ${selectedItem === 'work' || isWorkExpanded ? 'bg-gray-700 border-r-4 border-red-500' : 'hover:bg-gray-700'}`}>
        <div className="flex items-center">
          {isWorkExpanded ? <MdKeyboardArrowDown className="text-red-500" /> : <MdKeyboardArrowRight className="text-red-500" />}
          <p className="ml-2 text-lg">Work</p>
        </div>
        {isWorkExpanded && (
          <div className="pl-5">
            <div className="flex items-center py-2">
              <BsFillCalendar2DateFill className="text-red-500" />
              <p className="ml-2">This Week</p>
            </div>
            <div className="flex items-center py-2">
              <PiNotePencil className="text-red-500" />
              <p className="ml-2">Meeting Notes</p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
