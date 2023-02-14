import React from 'react'
import { List } from '../Api/List'
import Item from './Item'

function ItemList() {
  // ------------------------
// Inline style for the Item List
  const ListStyle = {
    color :"red",
    display : "flex",
    justifyContent : "Space between"

  }
  // ---------------------------
  // The default props for my Item component
  Item.defaultProps = {
    name: "test",
    image: "test",
    price: "tets"
  }
  return (
    <>
    <div style={ListStyle}>

    {List.map(item => <Item />
  
    )}
    </div>
    </>
  )
}

export default ItemList
