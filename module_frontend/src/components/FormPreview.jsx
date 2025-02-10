import React from "react";

const FormPreview = ({ elements = [] }) => {
  return (
    <form >
      {elements.map((element ) => (
        <div key={element.id} className="my-2 border-2 border-blue-950 rounded-lg bg-white p-5">
          <label>{element.label}</label> <br />
          {element.type === "text" && <input type="text" className="textInput"/>}
          {element.type === "email" && <input type="email" placeholder="ex: test@company.domain" className="textInput"/>}
          {element.type === "date" && <input type="date" className="textInput"/>}
          {element.type === "range" && <input type="range" className="textInput accent-blue-500"/>}
          {element.type === "file" && <input type="file" className="textInput"/>}
          {element.type === "color" && <input type="color" className=""/>}
          {element.type === "checkbox" && <input type="checkbox" />}
          {element.type === "radio" && (
            <div>
              <input type="radio" name={element.id} /> <br />
              <input type="radio" name={element.id} />
            </div>
          )}
        </div>
      ))}
    </form>
  );
};

export default FormPreview;
