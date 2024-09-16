import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Card = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="card-box">
      {data.map((cardData, ind) => {
        return (
          <div
            style={{
              background: theme === "light" ? "#000" : "#fff",
            }}
            key={ind}
            className="cards"
          >
            <img
            style={{
              border : theme === "light"? "3px solid #fff" : "3px solid #000"
            }}
             src={cardData.img} alt={cardData.username} />
            <h1
              style={{
                color: theme === "light" ? "white" : "black",
              }}
            >
              {cardData.username}
            </h1>
            <h2
              style={{
                color: theme === "light" ? "white" : "black",
              }}
            >
              Bio
            </h2>
            <h5
              style={{
                color: theme === "light" ? "white" : "black",
              }}
            >
              {cardData.desc}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
