import React from 'react'
import { useContext } from 'react'

import '../style/Moderation.css'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'



export default function Moderation() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const rest = useNavigate()

  function exit() {
    setIsAuth(false)
    rest("/login")
  }

  return (
    <div>
      <header>
        <div className="content_user">
          <div className="user">
            <p>Иванов Иван Иванович</p>
            <div className='button' onClick={exit}>выход</div>
          </div>
        </div>
      </header>
    </div>
  )
}