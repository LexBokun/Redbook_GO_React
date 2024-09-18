import React from 'react'
import { useContext } from 'react'

import '../style/Moderation.css'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'

import MyModal from '../components/UI/MyModal/MyModal'
import { useState } from 'react'

export default function Moderation() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const rest = useNavigate()

  const [visibleCatalogue, setVisibleCatalogue] = useState(false)

  function exit() {
    setIsAuth(false)
    localStorage.removeItem('auth')
    rest('/login')
  }

  return (
    <div>
      <header>
        <div className="content_user">
          <h1>Просмотр информации</h1>
          <div className="user">
            <p>Иванов Иван Иванович</p>
            <div className="button" onClick={exit}>
              выход
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section1">
          <div onClick={() => setVisibleCatalogue(true)} className="conteiner_catalogue"></div>
          <div className="conteiner_kart"></div>
        </section>

        <section className="section2"></section>
      </main>

      <MyModal visible={visibleCatalogue} setVisible={setVisibleCatalogue}>
        <div className="modal">
          <h1>каталог</h1>
        </div>
      </MyModal>
    </div>
  )
}
