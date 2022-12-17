import React from "react";
import "./ItemCard.css";

function ItemCard(props) {
return (
<div className="card">
<div className="card-header">
  <h3>{props.name}</h3>
</div>
<div className="card-body">
  <p>{props.address}</p>
  <p>{props.phone}</p>
</div>
</div>
);
}

export default ItemCard;