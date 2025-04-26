import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
      />
      <span className={`checkbox__label ${checked ? 'checkbox__label--checked' : ''}`}>
        {label}
      </span>
    </label>
  );
};