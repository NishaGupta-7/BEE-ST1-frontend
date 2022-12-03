import React, { useState } from "react";
import "./AddBlog.css";

const AddBlog = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [textarea, setTextarea] = useState("Your Content");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setTextarea(event.target.value);
  };
  return (
    <>
      <div className="contain">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <label className="form">
              LABEL: 
              <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label className="form">
              TEXT:
              <input
                type="text"
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <textarea
              rows={20}
              cols={200}
              value={textarea}
              onChange={handleChange}
            />
            <br />
            <input className="btn" type="button" value="POST"></input>
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
