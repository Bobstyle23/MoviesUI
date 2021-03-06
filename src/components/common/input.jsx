import React from "react";

//object destruction to reduce code repetition
function Input({ name, label, value, onChange, type, error }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        autoFocus
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;
