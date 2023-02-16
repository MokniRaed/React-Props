import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';



const Item = ({props})=> {

    Item.propTypes = {
      name: PropTypes.string,
      image: PropTypes.any,
      price:  PropTypes.string

    } 

  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.price} DT
        </Card.Text>
        <Button   variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item
