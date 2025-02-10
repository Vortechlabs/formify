import React, { useState } from "react";

const FormElement = ({ element, onLabelChange, onRemove }) => {
  const [label, setLabel] = useState(element.label);

  const handleLabelChange = (e) => {
    const newLabel = e.target.value;
    setLabel(newLabel);
    onLabelChange(element.id, newLabel);
  };

  return (
    <div >
      <div>
        <input
          type="text"
          value={label}
          onChange={handleLabelChange}
          placeholder="Label"
        />
        <button onClick={() => onRemove(element.id)} className="text-blue-950 my-1">Remove</button>
      </div>
      {element.type === "text" }
      {element.type === "email"}
      {element.type === "date"}
      {element.type === "range"}
      {element.type === "file"}
      {element.type === "color"}
      {element.type === "checkbox"}
      {element.type === "radio"}
    </div>
  );
};

export default FormElement;
