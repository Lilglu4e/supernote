'use client'
import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { FaArrowRotateLeft } from "react-icons/fa6";
import Menu from "./Menu";
import { LuBoxSelect } from "react-icons/lu";

export default function Editor() {
    // const [showMenu, setShowMenu] = useState(false);
    // const iconRef = useRef(null);

    // const toggleMenu = () => {
    //     setShowMenu(!showMenu);
    // };
const [items, setItems] = useState<string[]>([]);
    const [currentInput, setCurrentInput] = useState<string>('');
    const [isMenuVisible, setIsMenuVisible] = useState(false); // Step 1: Menu visibility state

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentInput(e.target.value);
    };

    const handleAddItem = () => {
        if (currentInput.trim() !== '') {
            setItems([...items, currentInput]);
            setCurrentInput('');
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAddItem();
        }
    };

    // Step 2: Toggle function for Menu visibility
    const toggleMenuVisibility = () => setIsMenuVisible(!isMenuVisible);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '0px';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [currentInput]);
    return (
        // <div style={{ position: 'relative' }} className="flex items-center p-2">
        //     {showMenu && <div className="absolute top-[-100px] left-[-120px] z-[1000]"><Menu /></div>}
        //     <div ref={iconRef} onClick={toggleMenu} className="cursor-pointer mr-2">
        //         <FaArrowRotateLeft />
        //     </div>
        // </div>
      <div className='flex items-start text-lg'>
          <div className='relative pt-1'> {/* Positioning container */}
              {isMenuVisible && (
              <div className="absolute left-0 transform -translate-x-full mt-1 w-40">
                  <Menu />
              </div>
              )}
              <LuBoxSelect className='text-xl text-white' onClick={toggleMenuVisibility}/>
          </div>
          <textarea
              ref={textareaRef}
              value={currentInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className="flex-1 text-lg items-center text-white bg-transparent rounded-md border-none outline-none resize-none ml-2"
              placeholder="Add a new item"
              style={{ overflowY: 'hidden', minHeight: '20px' }}
          ></textarea>
      </div>
    );
}
