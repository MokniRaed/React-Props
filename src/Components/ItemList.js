import React from "react";
import { List } from "../Api/List";
import Item from "./Item";

const ItemList = () => {
  // ------------------------
  // Inline style for the Item List
  const ListStyle = {
    color: "red",
    display: "flex",
    justifyContent: "Space between",
  };
  // ---------------------------
  // The default props for Item component
  Item.defaultProps = {
    name: "test",
    image: "test",
    price: "100",
  };

  const alertProduct = (cardName) => {
    alert(cardName);
  };

  return (
    <>
      <div style={ListStyle}>
        {List.map((item,key) => (
          <div key={key} onClick={() => alertProduct(item.name)}>
            <Item
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
            
      </div>
    </>
  );
};

export default ItemList;
