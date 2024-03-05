'use client';
import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { GrSort } from "react-icons/gr";
import { LuBoxSelect } from "react-icons/lu";
import Menu from './Menu';
import Editor from './Editor';

export default function ToDoList() {
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
        <div className=" flex flex-col bg-gray-900 justify-items-start text-sm h-screen rounded-lg p-6 mx-2 flex-grow-3/6">
            <div className='flex justify-end items-center mb-4'>
                <button aria-label="Sort tasks" className='flex items-center justify-center rounded-full bg-gray-600 p-3 hover:bg-gray-500 transition'>
                    <GrSort className='text-xl text-white'/>
                </button>
            </div>
            <div className='flex flex-col mb-4'>
                <h1 className="text-3xl text-white font-bold mb-4">
                    Meeting Notes
                </h1>
                <Editor />
            </div>
        </div>
    );
}
