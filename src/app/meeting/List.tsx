'use client'
import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { GrSort } from "react-icons/gr";
import { LuBoxSelect } from "react-icons/lu";
import Menu from './Menu';
import Editor from './Editor';

export default function ToDoList() {
    const [editors, setEditors] = useState([{ id: Date.now() }]);
    const editorRefs = useRef([]);

    // useEffect(() => {
    //     const lastEditor = editorRefs.current[editorRefs.current.length - 1];
    //     if (lastEditor) {
    //         lastEditor.focus();
    //     }
    // }, [editors]);

    const addNewEditor = () => {
        setEditors(prevEditors => [...prevEditors, { id: Date.now() }]);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            addNewEditor();
        }
    };

    return (
        <div className="flex flex-col bg-gray-900 justify-items-start text-sm h-screen rounded-lg p-6 mx-2 flex-grow-3/6" onKeyDown={handleKeyPress}>
            <div className='flex justify-end items-center mb-4'>
                <button aria-label="Sort tasks" className='flex items-center justify-center rounded-full bg-gray-600 p-3 hover:bg-gray-500 transition'>
                    <GrSort className='text-xl text-white'/>
                </button>
            </div>

            <h1 className="text-3xl text-white font-bold mb-4">Meeting Notes</h1>
            {editors.map((editor, index) => (
                <Editor key={editor.id}/>
            ))}
        </div>
    );
}
