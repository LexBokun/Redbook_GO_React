import React from 'react'
import { useContext } from 'react'

import '../style/Moderation.css'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'

import MyModal from '../components/UI/MyModal/MyModal'
import { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

import Cataloglist from '../components/Cataloglist'

export default function Moderation() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const rest = useNavigate()

  const [visibleCatalogue, setVisibleCatalogue] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function exit() {
    setIsAuth(false)
    localStorage.removeItem('auth')
    rest('/login')
  }

  return (
    <>
      <header>
        <div className="navbar">
          <Button variant="primary" onClick={handleShow} className="icon-minu">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M3 45L38 25L3 5" stroke="#769929" strokeWidth="11" />
            </svg>
          </Button>
          <h1>Просмотр информации</h1>
        </div>
        <div className="content_user">
          <p>Иванов Иван Иванович</p>
          <div className="button_exit" onClick={exit}>
            выход
          </div>
        </div>
      </header>

      <main>
        <section className="section1">
          <div onClick={() => setVisibleCatalogue(true)} className="conteiner_catalogue">
            <h3>Флора и фауна</h3>
            <div className="catalogue">
              <Cataloglist carts={[{id: 1, title: 'Выдра', body: 'Описание каталога 1', isPopulationGrowth: true}, {id: 2, title: 'Каталог 2', body: 'Описание каталога 2', isPopulationGrowth: false}, {id: 3, title: 'Каталог 3', body: 'Описание каталога 3', isPopulationGrowth: true}, {id: 4, title: 'Каталог 4', body: 'Описание каталога 4', isPopulationGrowth: true}]} />
            </div>
          </div>
          <div className="conteiner_kart">
            <h3>Просмотр онлайн карты</h3>
            <img width={300} src="https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/image.png" alt="" />
          </div>
        </section>

        <section className="novosti">
          <h2>Новости</h2>
          <div className="novosti_content"></div>
          <Button variant="success" className="novosti_button">
            Выложить новости
          </Button>
        </section>
      </main>

      <Offcanvas className="offcanvas" show={show} onHide={handleClose}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
          <Button variant="primary" onClick={handleClose} className="icon-minu">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M47 5L12 25L47 45" stroke="#769929" strokeWidth="11" />
            </svg>
          </Button>
        </div>
      </Offcanvas>

      <MyModal visible={visibleCatalogue} setVisible={setVisibleCatalogue}>
        <div className="modal">
          <h1>каталог</h1>
        </div>
      </MyModal>
    </>
  )
}
