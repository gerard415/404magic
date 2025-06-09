import React from 'react';
import { ListIcon, SelectArrow } from './Icons';

// Define option type
type Option = {
  label: React.ReactNode;
  value: string;
};

// Define the props for the select component
type SelectProps = {
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CustomSelect: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <div className="w-30 max-w-sm relative">
      <select
        value={value}
        onChange={onChange}
        className="block w-full pl-7 py-2 text-xs text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none cursor-pointer appearance-none"
      >
        {options.map((option) => (
          <option className="hover:cursor-pointer" key={option.value} value={option.value}>
            {typeof option.label === 'string' ? option.label : ''}
          </option>
        ))}
      </select>

      {/* Custom ListIcon for List View option */}
      <span className="absolute left-1.5 top-1/2 transform -translate-y-1/2 text-gray-500">
        {/* Conditionally render ListIcon for List View */}
        {value === '' && <ListIcon />}
      </span>

      {/* Custom SVG icon for dropdown arrow */}
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer ">
        <SelectArrow />
      </span>
    </div>
  );
};

export default CustomSelect;
