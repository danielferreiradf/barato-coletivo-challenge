import React from "react";

const Offer = ({ match }) => {
  const id = match.params.id;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Offer;
