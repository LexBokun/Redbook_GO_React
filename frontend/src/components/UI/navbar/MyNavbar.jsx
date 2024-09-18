import React from 'react'
import { Link } from 'react-router-dom'

import './MyNavbar.css'

export default function MyNavbar() {
  return (
    <nav className='navbar'>
        <div className="navbar__links">
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/login">Логин</Link>
          <Link to="/moderation">Модерация</Link>
        </div>
      </nav>
  )
}