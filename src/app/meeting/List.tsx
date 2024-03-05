'use client';
import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { GrSort, GrClose } from "react-icons/gr";
import { CiCirclePlus } from "react-icons/ci";
import ToDoItem from './ToDoItem'; // Assuming ToDoItem is a new component
import { FaRegCircle, FaRegCheckCircle,} from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Editor from './Editor';

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
        <div className="flex flex-col bg-gray-900 justify-items-start text-sm h-screen rounded-lg p-6 mx-2 flex-grow-3/6">
            <div className='flex justify-end items-center mb-4'>
                <button aria-label="Sort tasks" className='flex items-center justify-center rounded-full bg-gray-600 p-3 hover:bg-gray-500 transition'>
                    <GrSort className='text-xl text-white'/>
                </button>
            </div>
            <div className='flex items-center mb-4'>
                <h1 className="text-3xl text-white font-bold">Meeting Notes</h1>
            </div>
            <Editor />
            <div className='flex flex-col items-start mb-4'>
                <p>Hello</p>
                <h1>Hello</h1>
            </div>
        </div>
    );
}

// New ToDoItem component (to be created in a separate file, e.g., ToDoItem.jsx)
