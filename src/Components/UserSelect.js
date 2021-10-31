import React from "react";
import "./UserSelect.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const UserSelect = () => {
  return (
    <div className="menu-wrapper">
      <div>
        <p className="click-me">
          <div className="arrow-container">
            <MdKeyboardArrowLeft className="arrow" />
          </div>
          Previous
        </p>
      </div>
      <div className="button-container">
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
      </div>
      <div>
        <p className="click-me">
          Next
          <div className="arrow-container">
            <MdKeyboardArrowRight className="arrow" />
          </div>
        </p>
      </div>
    </div>
  );
};

export default UserSelect;
