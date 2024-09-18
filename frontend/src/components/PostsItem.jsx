import React, {useState} from 'react'
import '../style/App.css'
import MyButton from '../components/UI/batton/MyButton'
import { useNavigate } from 'react-router-dom'

export default function PostsItem(cart) {

  const router = useNavigate()
  
  return (
    <div className="PostsItem" onClick={() => router('/cart/' + cart.title)}>
      <div className='post__content'>
        <strong>{cart.post.title}</strong>
        <p>{cart.body}</p>
      </div>
    </div>
  )
}
