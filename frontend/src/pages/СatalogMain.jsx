import React, { useState } from 'react'
import '../style/СatalogMain.css'
import {Carousel} from 'react-bootstrap'

export default function CartCatalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('Флора')
  const [carts, setCarts] = useState([
    {
      id: 1,
      name: 'Горностай / Mustela erminea',
      class: 'млекопитающие',
      order: 'хищные',
      family: 'куньи',
      genus: 'ласки и хорьки',
      count: 9,
      description: `Этот зверёк длиной всего 18-25 сантиметров...`,
      habitat: `Обитает в речных долинах и лугах...`,
      image: '/path/to/image.png', // Путь к изображению
    },
  ])

  return (
    <div className="container">
      {/* Заголовок и фильтр */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h1>Фильтрация и Поиск</h1>
        <div>
          <label htmlFor="filterSelect" className="me-2">
            Тип:
          </label>
          <select id="filterSelect" className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Флора">Флора</option>
            <option value="Фауна">Фауна</option>
          </select>
        </div>
      </div>

      {/* Поиск */}
      <div className="input-group my-4">
        <input type="text" className="form-control" placeholder="Поиск" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {/* Карточка животного */}
      {carts.map((cart) => (
        <div key={cart.id} className="card mb-4">
          <h2>{cart.name}</h2>
          <div className="row">
            {/* Основная информация */}
            <div className="col">
              <div className="row">
                {/* Изображение */}
                <div className="col">
                  <img src={cart.image} className="img-fluid rounded-start" alt={cart.name} />
                  <Carousel>
                    <Carousel.Item>
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>

                {/* Основные характеристики */}
                <div className="col">
                  <div className="card-body">
                    <p className="card-text">
                      <strong>Класс: </strong> {cart.class}
                    </p>
                    <p className="card-text">
                      <strong>Отряд: </strong> {cart.order}
                    </p>
                    <p className="card-text">
                      <strong>Семейство: </strong> {cart.family}
                    </p>
                    <p className="card-text">
                      <strong>Род: </strong> {cart.genus}
                    </p>
                    <p className="card-text">
                      <strong>Количество особей: </strong> {cart.count}
                    </p>
                  </div>
                </div>
              </div>

              {/* описание */}
              <div className="row">
                <p className="card-text">{cart.description}</p>
              </div>
            </div>

            {/* Ареал обитания */}
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Ареал обитания</h5>
                  <p className="card-text">{cart.habitat}</p>
                  <img src={cart.image} className="img-fluid" alt="Ареал обитания" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
