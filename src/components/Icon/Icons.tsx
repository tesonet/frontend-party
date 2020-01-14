import React from "react";

const User: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="16"
    viewBox="0 0 14 16"
  >
    <path
      id="Combined_shape_7641"
      data-name="Combined shape 7641"
      d="M1,17V14a3.86,3.86,0,0,1,2.964-3.575,5.961,5.961,0,0,0,8.072,0A3.86,3.86,0,0,1,15,14v3ZM4,6V5a4,4,0,1,1,8,0V6A4,4,0,0,1,4,6Z"
      transform="translate(-1 -1)"
      fill="#ccc"
    />
  </svg>
);

const Padlock: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="18"
    viewBox="0 0 14 18"
  >
    <path
      id="Combined_shape_7642"
      data-name="Combined shape 7642"
      d="M14,19H2a.947.947,0,0,1-1-1V9A.947.947,0,0,1,2,8H4V5a4,4,0,1,1,8,0V8h2a.947.947,0,0,1,1,1v9A.947.947,0,0,1,14,19ZM8,11a1,1,0,0,0-1,1v3a1,1,0,1,0,2,0V12A1,1,0,0,0,8,11ZM8,3A2,2,0,0,0,6,5V8h4V5A2,2,0,0,0,8,3Z"
      transform="translate(-1 -1)"
      fill="#ccc"
    />
  </svg>
);

const Exit: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      id="Combined_shape_7742"
      data-name="Combined shape 7742"
      d="M7,18a.945.945,0,0,1-1-1V14H8v2h7V4H8V6H6V3A.945.945,0,0,1,7,2h9a.945.945,0,0,1,1,1V17a.945.945,0,0,1-1,1ZM1,10,5,6V9h6v2H5v3Z"
      transform="translate(-1 -2)"
      fill="#2f3254"
    />
  </svg>
);

export default {
  User,
  Padlock,
  Exit
};
