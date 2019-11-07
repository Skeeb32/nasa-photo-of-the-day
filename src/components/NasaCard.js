import React from "react";

const NasaCard = props => {
  return (
    <div className="potd">
      <h2>Photo title: {props.title}</h2>
      <p>{props.explanation}</p>
      <p>{props.date}</p>
      <img src = {props.url} />
      </div>
  );
};
export default NasaCard;