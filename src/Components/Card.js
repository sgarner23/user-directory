import React from "react";
import "./Card.css";
import UserSelect from "./UserSelect";

const Card = () => {
  return (
    <div className="card">
      <p className="card-number">1/25</p>
      <div className="name-container">
        <h2 className="name">Marion Santori</h2>
      </div>

      <div className="work-info">
        <p>
          <strong>From: </strong> &nbsp;Liverpool, United Kingdom
        </p>
        <p>
          <strong>Job Title: </strong>&nbsp;Research Assoicate
        </p>
        <p>
          <strong>Employer: </strong>&nbsp;Skinix
        </p>
      </div>
      <div className="movies">
        <p className="fav-movies">Favorite Movies: </p>
        <ol className="list">
          <li>Fathom</li>
          <li>Strange Magic</li>
          <li>Martian Child</li>
        </ol>
      </div>
      <UserSelect />
    </div>
  );
};

export default Card;
