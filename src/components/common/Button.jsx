import React from "react";
import './button.scss'

export const Button = ({ disabled, className, onClick, name, children }) => {
  return (
    <>
      <div id="button-wrapper">
        <button
          type="button"
          autoComplete="nope"
          disabled={disabled}
          className={className}
          onClick={onClick}
          name={name}
        >
          {children}
        </button>
      </div>
    </>
  );
};
