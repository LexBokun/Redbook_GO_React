import React, { useState } from 'react'
import '../style/App.css'
import { useNavigate } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

export default function CartItem(cart) {
  const router = useNavigate()

  return (
    // <div className="PostsItem" >
    //   <div className='post__content'>
    //     <strong>{cart.title}</strong>
    //     <p>{cart.body}</p>
    //   </div>
    // </div>
    <Card className="bg-dark text-white carts">
      <Card.Img className='cart__image' src="https://via.placeholder.com/300" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{cart.title}</Card.Title>
        <Card.Text>
          {cart.body}
        </Card.Text>
        <Button onClick={() => router('/catalog/' + cart.id)}>Подробнее</Button>
      </Card.ImgOverlay>
    </Card>
  )
}
