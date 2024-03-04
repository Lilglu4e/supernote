'use client';
import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { GrSort, GrClose } from "react-icons/gr";
import { CiCirclePlus } from "react-icons/ci";
import ToDoItem from './ToDoItem'; // Assuming ToDoItem is a new component
import { FaRegCircle, FaRegCheckCircle,} from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

export default function ToDoList() {
    const [items, setItems] = useState<string[]>([]);
    const [currentInput, setCurrentInput] = useState<string>('');

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

    const handleRemoveItem = (index: number) => {
        setItems(items.filter((_, itemIndex) => itemIndex !== index));
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '0px'; // Reset before setting to scrollHeight to ensure accurate height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [currentInput]);

    return (
        <div className="flex flex-col bg-gray-900 justify-items-start h-screen overflow-auto text-sm rounded-lg p-6 mx-2 font-sans flex-grow-3/6">
            <div className='flex justify-end items-center mb-4'>
                <button aria-label="Sort tasks" className='flex items-center justify-center rounded-full bg-gray-600 p-3 hover:bg-gray-500 transition'>
                    <GrSort className='text-xl text-white'/>
                </button>
            </div>
            <div className='flex items-center mb-4'>
                <h1 className="text-3xl text-white font-bold">Inbox</h1>
            </div>
            <div className="flex flex-row items-center">
                <div className='flex justify-start'>
                    <FaCirclePlus className='justify-center text-lg text-white'/>
                </div>
                <textarea
                    ref={textareaRef}
                    value={currentInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className="text-white bg-transparent rounded-md outline-none p-2 flex-grow resize-none"
                    placeholder="New task"
                    style={{ overflowY: 'hidden' }}
                ></textarea>
            </div>
            <ul className="flex flex-col">
                {items.map((item, index) => (
                    <ToDoItem
                        key={index}
                        item={item}
                        onRemove={() => handleRemoveItem(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

// New ToDoItem component (to be created in a separate file, e.g., ToDoItem.jsx)
