import React, { useState } from "react";
import FormElement from "./FormElement";
import FormPreview from "./FormPreview";
import image from "../assets/22113281_6545922.jpg"

const FormBuilder = () => {
  const [elements, setElements] = useState([]);
  
  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      label: `${type} Label`,
      value: "",
    };
    setElements([...elements, newElement]);
  };

  const handleLabelChange = (id, newLabel) => {
    setElements(elements.map((elem) =>
      elem.id === id ? { ...elem, label: newLabel } : elem
    ));
  };

  const removeElement = (id) => {
    setElements(elements.filter((elem) => elem.id !== id));
  };

  return (
    <div className="flex min-w-screen justify-between">

    <div className="flex justify-center min-h-screen p-20 z-50">
      <div>
        <div className="  text-white border-2 border-black w-7xl h-52 rounded-lg text-center flex items-center justify-center"  style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
          <h1 className="drop-shadow-[5.20px_0_rgba(0,0,0,0.8)]">Form Preview</h1>
        </div>
        <FormPreview elements={elements} />
        <div>
          <button type="submit" className="w-full ring-2 ring-blue-950 my-2">Submit</button>
        </div>
      </div>
    </div>
    
    <div className="fixed  items-end flex h-screen">

        </div>
      
      <div className="fixed justify-items-end w-screen"> 
      <div className="bg-blue-950 p-4 h-screen pr-8 border-l-4 border-black">
      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => addElement("text")} className="ring-3 ring-black">Add Text Field</button>
        <button onClick={() => addElement("email")} className="ring-3 ring-black">Add Email Field</button>
        <button onClick={() => addElement("date")} className="ring-3 ring-black">Add Date Field</button>
        <button onClick={() => addElement("range")} className="ring-3 ring-black">Add Range Field</button>
        <button onClick={() => addElement("file")} className="ring-3 ring-black">Add File Field</button>
        <button onClick={() => addElement("color")} className="ring-3 ring-black">Add Color Field</button>
        <button onClick={() => addElement("checkbox")} className="ring-3 ring-black">Add Checkbox</button>
        <button onClick={() => addElement("radio")} className="ring-3 ring-black">Add Radio Button</button>
      </div>

      <hr className="my-5 border-white"/>
      <div className="grid grid-cols-2 gap-6 text-white font-bold">
      <h3>Label</h3> <h3>Action</h3>
      </div>
      <hr className="my-5 border-white"/>
      
      <div className="text-white ">
        {elements.map((element) => (
          <FormElement 
            key={element.id} 
            element={element} 
            onLabelChange={handleLabelChange} 
            onRemove={removeElement}
          />
        ))}
      </div>

      <p className="text-gray-100 text-sm">*double click to edit label</p>
      </div>
      </div>
    </div>
  );
};

export default FormBuilder;
