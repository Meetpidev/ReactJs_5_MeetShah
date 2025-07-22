import { useState } from "react";

function DynamicForm() {
  
  const [inputFields, setInputFields] = useState([{ value: "" }]);


  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  // Add a new input field
  const handleAdd = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  // Remove an input field by index
  const handleRemove = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const Values = inputFields.map(field => field.value);
    console.log("Submitted values:",Values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dynamic Input Fields</h3>

      {inputFields.map((input, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder={`Field #${index + 1}`}
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
            style={{ marginRight: "10px" }}
          />
          <button
            type="button"
            onClick={() => handleRemove(index)}
            disabled={inputFields.length === 1} 
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAdd}>
        Add More
      </button>

      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
