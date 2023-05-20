import React from "react";

const Details = ({ toys }) => {
  const { _id, SellerName, ToyName } = toys;
  return (
    <div>
      <h1>details {ToyName}</h1>
      <h1>details {SellerName}</h1>
    </div>
  );
};

export default Details;
