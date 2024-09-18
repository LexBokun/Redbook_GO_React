import React from 'react'
import PostItem from './PostsItem'
import '../style/App.css'

export default function Postlist({ carts, title, remove }) {
  return (
    <div className="Postlist">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
        {carts.map((cart, index) => (
            <PostItem key={cart.id} remove={remove} post={cart} title={index} />
        ))}
    </div>
  )
}
