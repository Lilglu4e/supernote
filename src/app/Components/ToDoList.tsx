'use client'
import React, { useState, useEffect } from 'react';

export default function ToDoList() {
    const [items, setItems] = useState([]);
    const [currentInput, setCurrentInput] = useState('');

    const handleInputChange = (e) => {
        setCurrentInput(e.target.value);
    };

    const handleAddItem = () => {
        if (currentInput.trim() !== '') {
            setItems([...items, currentInput]);
            setCurrentInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAddItem();
        }
    };

    // Use a ref for the textarea to adjust its height dynamically
    const textareaRef = React.useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'inherit'; // Reset height to recalculate
            // Set height based on scroll height to expand as needed
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [currentInput]); // Re-run effect when currentInput changes

    return (
        <div className="flex flex-col bg-gray-900 justify-items-start h-screen overflow-auto text-xs rounded-lg flex-grow-3/6 p-10 mx-2">
            <div className="flex">
                <p className="text-xl text-white">Inbox</p>
            </div>
            <div className="flex">
                <textarea
                    ref={textareaRef}
                    value={currentInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className="text-white bg-transparent rounded-md border-none outline-none px-2 py-1 w-full resize-none"
                    placeholder="Add a new item"
                    style={{ overflowY: 'hidden' }} // Prevent scrollbar
                ></textarea>
            </div>
            <ul className="mt-4">
                {items.map((item, index) => (
                    <li key={index} className="text-white">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
