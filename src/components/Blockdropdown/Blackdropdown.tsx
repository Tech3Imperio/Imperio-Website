import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Google } from "../../hooks/Google/Google";

interface BlocksDropdownProps {
  onSelect: (selectedBlocks: string[]) => void;
}

export function BlocksDropdown({ onSelect }: BlocksDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const { data, loading, error } = Google();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (block: string) => {
    const updatedSelection = selectedBlocks.includes(block)
      ? selectedBlocks.filter((b) => b !== block)
      : [...selectedBlocks, block];
    setSelectedBlocks(updatedSelection);
    onSelect(updatedSelection);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold">Blocks</h3>
        <button
          onClick={toggleDropdown}
          className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
        >
          <FaPlus />
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer flex items-center"
                role="menuitem"
                onClick={() => handleSelect(item[Object.keys(item)[0]])}
              >
                <input
                  type="checkbox"
                  checked={selectedBlocks.includes(item[Object.keys(item)[0]])}
                  onChange={() => {}}
                  className="mr-2"
                />
                {item[Object.keys(item)[0]]}
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedBlocks.length > 0 && (
        <div className="mt-2">
          <h4 className="font-semibold">Selected Blocks:</h4>
          <ul className="list-disc list-inside">
            {selectedBlocks.map((block, index) => (
              <li key={index}>{block}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
