import React, { useState } from 'react';
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

// Define a type for the props expected by the ToDoItem component
type ToDoItemProps = {
    item: string;
    onRemove: () => void; // Assuming onRemove does not need any parameters passed to it. Adjust if necessary.
};

const ToDoItem: React.FC<ToDoItemProps> = ({ item, onRemove }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li className="flex items-center text-white bg-transparent rounded-md mb-2">
            <button 
                aria-label="Remove task"
                className="text-red-500 hover:text-red-400 flex items-center justify-center"
                onClick={onRemove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered ? <FaRegCheckCircle className='text-lg'/> : <FaRegCircle className='text-lg'/>}
            </button>
            <span className="pl-2 align-middle">{item}</span>
        </li>
    );
};

export default ToDoItem;
