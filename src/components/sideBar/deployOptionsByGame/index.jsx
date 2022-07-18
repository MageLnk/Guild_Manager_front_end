import React from "react";
import { Link } from "react-router-dom";

const DeployOptionsByGame = ({ gamePages }) => {
  return (
    <>
      {gamePages.pages.map((target) => {
        return (
          <Link key={target} className="hyper-link-decoration" to={`${target.toLowerCase()}`}>
            <p>{target}</p>
          </Link>
        );
      })}
    </>
  );
};

export default DeployOptionsByGame;
