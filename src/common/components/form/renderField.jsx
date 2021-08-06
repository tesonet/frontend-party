import React from 'react';

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    {label && (
    <label
      htmlFor="lastName"
      className="block text-gray-100 text-sm font-bold mb-2 pl-2"
    >
      {label}
    </label>
    )}
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className="border-none text-gray-800 rounded w-full p-2.5 focus:outline-none"
      />
      {touched && ((error && <span className="ml-1 text-red-400">{error}</span>))}
    </div>
  </div>
);
export default renderField;
