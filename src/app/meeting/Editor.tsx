import React, { useState, useRef, useEffect } from 'react';
import Menu from './Menu';
import { LuBoxSelect } from 'react-icons/lu';

export default function Editor() {
  const [currentInput, setCurrentInput] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('Paragraph');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const textareaRef = useRef(null);

  const handleFormatSelect = (format) => {
    setSelectedFormat(format); // Update the selected format
  };

  const toggleMenuVisibility = () => setIsMenuVisible(!isMenuVisible);

  // Adjust textarea height based on its content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px'; // Reset height to recalculate
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [currentInput]);

  const formatColors = {
    'Task': `flex items-start text-lg bg-red-100`,
    'Paragraph': `flex items-start text-lg bg-red-200`,
    'Heading 1': 'flex items-start text-2xl bg-green-300',
    'Heading 2': 'flex items-start text-lg bg-blue-400',
    'Heading 3': 'flex items-start text-lg bg-yellow-500',
    'Divider': `flex items-start text-lg bg-red-600`,
    'Bullet List': 'flex items-start text-lg bg-purple-700',
    'Numbered List': `flex items-start text-lg bg-red-800`,
    'Image': `flex items-start text-lg bg-red-900`,
    'Attachment': `flex items-start text-lg bg-blue-500`,
  };

  const bgColor = formatColors[selectedFormat] || ''; // Fallback to an empty string if the format isn't found

  return (
    <div className={`${bgColor}`}>
      <div className='relative pt-1'>
        {isMenuVisible && (
          <div className="absolute left-0 transform -translate-x-full mt-1 w-40">
            <Menu onSelect={handleFormatSelect} />
          </div>
        )}
        <LuBoxSelect className='text-xl text-white cursor-pointer' onClick={toggleMenuVisibility} />
      </div>
      <textarea
        ref={textareaRef}
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        className="flex-1 text-white bg-transparent rounded-md border-none outline-none resize-none ml-2"
        placeholder="Add a new item"
        style={{ overflowY: 'hidden', minHeight: '20px' }}
      ></textarea>
    </div>
  );
}
