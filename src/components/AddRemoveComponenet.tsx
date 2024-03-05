import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";

interface InputField {
  fullName: string;
  [key: string]: string; // Index signature
}

function AddRemoveComponenet() {
  const [inputFields, setInputFields] = useState<InputField[]>([
    { fullName: "" },
  ]);

  const addInputField = () => {
    setInputFields([...inputFields, { fullName: "" }]);
  };

  const removeInputField = (index: number) => {
    const updatedInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(updatedInputFields);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedInputFields = [...inputFields];
    updatedInputFields[index][name] = value;
    setInputFields(updatedInputFields);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="border bg-white">
          {inputFields.map((data, index) => (
            <div className="row my-3" key={index}>
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    onChange={(event) => handleChange(index, event)}
                    value={data.fullName}
                    name="email"
                    className="form-control"
                    placeholder="Email (Employee Application/email)"
                  />
                </div>
              </div>              
              <div className="col">
                {inputFields.length !== 1 && (
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeInputField(index)}
                  >
                    x
                  </button>
                )}
              </div>
            </div>
          ))}
          <hr />
          <div className="row">
            <div className="d-flex">
              <Button onClick={addInputField}>
                <i className="fa fa-plus me-2"></i>
                Add Field
              </Button>
            </div>
          </div>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default AddRemoveComponenet;
