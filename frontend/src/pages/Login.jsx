import React, {useState} from 'react'
import { useContext } from 'react'
import '../style/Login.css'
import Service from '../API/Service'
import { AuthContext } from '../context'



export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext)


  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  async function verify(e) {
    e.preventDefault()

    await Service.verify(login, password)
  
  }

  return (
    <div className="Login">
      <div className="icon">
        
      </div>
      <h1>Авторизация</h1>
      <form className="form">
        <input type="text" placeholder="Логин" value={login} onChange={(e) => setLogin( e.target.value )}/>
        <input type="password" placeholder="Пароль"  value={password} onChange={(e) => setPassword( e.target.value )}/>
        <button onClick={verify}>Войти</button>
      </form>
    </div>
  )
}
