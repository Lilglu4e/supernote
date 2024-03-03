'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {FaInbox, FaCalendarDay, FaTasks } from 'react-icons/fa';
import { BiSolidMessageRoundedDetail   } from "react-icons/bi";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { LuListPlus } from "react-icons/lu";
import { TbSquarePlus2 } from "react-icons/tb";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";

// const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

export default function SideBar() {
    const [click, setClicked] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelect = (item: any) => {
        if (item === 'work') {
            setClicked(!click); // Toggle expansion for work
            // Only set work as selected if it's being expanded, not when being collapsed
            setSelectedItem(click ? '' : 'work');
        } else {
            setClicked(false); // Collapse work if another item is selected
            setSelectedItem(selectedItem === item ? '' : item);
        }
    };
    return(
        <div className="flex flex-col bg-gray-900 justify-items-start h-screen overflow-auto text-xs rounded-lg flex-grow-1/6 py-10">
            <div className="flex flex-col justify-items-start mb-10">
                <div onClick={() => handleSelect('inbox')}
                     className={`flex items-center  px-5 py-1 border-r-2 ${selectedItem === 'inbox' ? 'bg-gray-800 border-red-900' : 'border-transparent hover:cursor-pointer'}`}>
                    <FaInbox className="text-red-500"/>
                    <p className="ml-2">Inbox</p>
                </div>
                <div onClick={() => handleSelect('today')}
                     className={`flex items-center  px-5 py-1 border-r-2 ${selectedItem === 'today' ? 'bg-gray-800 border-red-900' : 'border-transparent hover:cursor-pointer'}`}>
                    <FaCalendarDay className='text-red-500'/>
                    <p className="ml-2">Today</p>
                </div>
                <div onClick={() => handleSelect('tasks')}
                     className={`flex items-center  px-5 py-1 border-r-2 ${selectedItem === 'tasks' ? 'bg-gray-800 border-red-900' : 'border-transparent hover:cursor-pointer'}`}>
                    <FaTasks  className='text-red-500'/>
                    <p className="ml-2">Tasks</p>
                </div>
                <div onClick={() => handleSelect('messages')}
                     className={`flex items-center  px-5 py-1 border-r-2 ${selectedItem === 'messages' ? 'bg-gray-800 border-red-900' : 'border-transparent hover:cursor-pointer'}`}>
                    <BiSolidMessageRoundedDetail  className='text-red-500'/>
                    <p className="ml-2">Messages</p>
                </div>
            </div>
            <div className="flex flex-col justify-items-start mb-10">
                <div onClick={() => handleSelect('list')}
                     className={`flex items-center px-5 py-1 border-r-2 ${selectedItem === 'list' ? 'bg-gray-800 border-red-900' : 'border-transparent hover:cursor-pointer'}`}>
                    <p className="">List</p>
                    <button className='text-gray-500 pl-2'>Browse all</button>
                    <div className={`flex flex-grow justify-end`}>
                        <TbSquarePlus2  className='text-red-500 mr-2'/>
                        <LuListPlus  className='text-red-500'/>
                    </div>
                </div>
                <div onClick={() => handleSelect('work')}
                     className={`flex items-center px-5 py-1 border-r-2 ${selectedItem === 'work' ? ' border-red-900' : 'border-transparent hover:cursor-pointer'}`}>
                    {click ? (
                        <>
                            <MdKeyboardArrowDown className='text-red-500'/>
                            <p className="ml-2">Work</p>
                        </>
                    ) : (
                        <>
                            <MdKeyboardArrowRight className='text-red-500'/>
                            <p className="ml-2">Work</p>
                        </>
                    )}
                </div>
                {click && (
                    <div className="pl-10">
                        <div className="flex items-center">
                            <BsFillCalendar2DateFill className='text-red-500'/>
                            <p className="ml-2">This Week</p>
                        </div>
                        <div className="flex items-center">
                            <PiNotePencil className='text-red-500'/>
                            <p className="ml-2">Metting Notes</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
