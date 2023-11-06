import React, { useState } from 'react';

// Child Component
const ChildComponent = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent value={inputValue} onChange={handleInputChange} />
      <p>Value from Child Component: {inputValue}</p>
    </div>
  );
};

export default ParentComponent;

