import React, {useState} from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Login.css'
import Service from '../API/Service'
import { AuthContext } from '../context'
import MyInport from '../components/UI/input/MyInput'
import MyButton from '../components/UI/batton/MyButton'


export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const rest = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    setIsAuth(true)
    rest("/moderation")
    localStorage.setItem('auth', 'true')
    // await Service.verify(login, password)
  }

  return (
    <div className="Login">
      <div className="icon">
        
      </div>
      <h1>Авторизация</h1>
      <form className="form" onSubmit={login}>
        <MyInport type="text" placeholder="Логин"></MyInport>
        <MyInport type="password" placeholder="Пароль"></MyInport>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}
