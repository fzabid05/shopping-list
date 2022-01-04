import React from "react";
import "./listItem.css";
const ListIItem = ({ item, onDelete }) => {
  // color of item
  // item.quantity >= 50 ? (colorItem = "green") : (colorItem = "blue");
  return (
    <div>
      <h3
        className={`${
          item.quantity >= 50
            ? "itemgreen"
            : item.quantity < 25
            ? "itemRed"
            : "itemOrange"
        }`}
      >
        {item.name}
        <span onClick={() => onDelete(item.id)}>
          <i
            style={{
              color: "red",
              cursor: "pointer",
              padding: "5px",
              borderRadius: "50%",
              background: "white",
              margin: "5px",
            }}
            class="fas fa-times"
          ></i>
        </span>
      </h3>
    </div>
  );
};

export default ListIItem;
