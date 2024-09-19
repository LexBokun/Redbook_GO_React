import React, { useState } from 'react'
import '../style/СatalogMain.css'
import { Carousel } from 'react-bootstrap'
import YandexMap from '../components/YandexMap'

export default function CartCatalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const [carts, setCarts] = useState([
    {
      id: 1,
      title: 'Горностай / Mustela erminea',
      name: 'Горностай',
      class: 'млекопитающие',
      order: 'хищные',
      family: 'куньи',
      genus: 'ласки и хорьки',
      count: 9,
      description: `Описание: Этот зверёк длиной всего 18-26 сантиметров. Маленький размер позволяет ему легко находить себе местообитание даже в городской среде. Летом мех бурый, зимой – чисто белый. Кончик хвоста всегда чёрный.
      Несмотря на свой небольшой размер, горностай – настоящий хищник. По ночам он  охотится на мышевидных  грызунов и землероек, реже ест птиц, лягушек, насекомых и ягоды. При случае может подбирать остатки добычи более крупных хищников.
      В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов
      Горностай на городских природных территориях – это редкий вид, включённый в Красную Книгу г. Москвы. `,
      habitat: `В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов.`,
      isHibernation: false,
    },
    {
      id: 2,
      title: 'Горностай / Mustela erminea',
      name: 'Зелёный дятел',
      class: 'млекопитающие',
      order: 'хищные',
      family: 'куньи',
      genus: 'ласки и хорьки',
      count: 9,
      description: `Описание: Этот зверёк длиной всего 18-26 сантиметров. Маленький размер позволяет ему легко находить себе местообитание даже в городской среде. Летом мех бурый, зимой – чисто белый. Кончик хвоста всегда чёрный.
      Несмотря на свой небольшой размер, горностай – настоящий хищник. По ночам он  охотится на мышевидных  грызунов и землероек, реже ест птиц, лягушек, насекомых и ягоды. При случае может подбирать остатки добычи более крупных хищников.
      В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов
      Горностай на городских природных территориях – это редкий вид, включённый в Красную Книгу г. Москвы. `,
      habitat: `В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов.`,
      isHibernation: true,
    },
    {
      id: 3,
      title: 'Горностай / Mustela erminea',
      name: 'Язвенник обыкновенный',
      class: 'млекопитающие',
      order: 'хищные',
      family: 'куньи',
      genus: 'ласки и хорьки',
      count: 9,
      description: `Описание: Этот зверёк длиной всего 18-26 сантиметров. Маленький размер позволяет ему легко находить себе местообитание даже в городской среде. Летом мех бурый, зимой – чисто белый. Кончик хвоста всегда чёрный.
      Несмотря на свой небольшой размер, горностай – настоящий хищник. По ночам он  охотится на мышевидных  грызунов и землероек, реже ест птиц, лягушек, насекомых и ягоды. При случае может подбирать остатки добычи более крупных хищников.
      В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов
      Горностай на городских природных территориях – это редкий вид, включённый в Красную Книгу г. Москвы. `,
      habitat: `В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов.`,
      isHibernation: false,
    },
  ])

  const polygonCoords = [
    [55.8, 37.5],
    [55.85, 37.6],
    [55.8, 37.7],
    [55.75, 37.68],
    [55.7, 37.6],
    [55.7, 37.55],
    [55.72, 37.53],
    [55.75, 37.5],
  ]

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
        <div key={cart.id} className="card">
          <h2>{cart.title}</h2>
          <div className="row">
            {/* Основная информация */}
            <div className="col-md-8">
              <div className="row">
                {/* Изображение */}
                <div className="col">
                  <Carousel interval={null} fade={false} slide={false} controls={false}>
                    <Carousel.Item>
                      <div
                        className="card-image"
                        style={{
                          backgroundImage: `url("https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/catalog/${cart.name.replace(
                            / /g,
                            '_',
                          )}/1.png")`,
                        }}></div>
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div
                        className="card-image"
                        style={{
                          backgroundImage: `url("https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/catalog/${cart.name.replace(
                            / /g,
                            '_',
                          )}/2.png")`,
                        }}></div>
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div
                        className="card-image"
                        style={{
                          backgroundImage: `url("https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/catalog/${cart.name.replace(
                            / /g,
                            '_',
                          )}/3.png")`,
                        }}></div>
                      <Carousel.Caption></Carousel.Caption>
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
                      <div>
                        <span className="cart_kol1">
                          <strong>Количество особей:</strong>
                        </span>{' '}
                        <span className="cart_kol2">{cart.count}</span>
                      </div>
                    </p>
                  </div>
                    {cart.isHibernation && (
                      <div className="hibernation">
                        <div>Птица находится в зимовке в период с <b>октября</b> по <b>март</b></div>
                      </div>
                    )}
                </div>
              </div>
              {/* описание */}
              <div className="row description">
                <p className="card-text">{cart.description}</p>
              </div>
            </div>

            {/* Ареал обитания */}
            <div className="col-md-4 areal">
              <div className="card">
                <div className="card-body">
                  <YandexMap
                    center={[55.75, 37.6]} // Центр карты
                    zoom={10} // Масштаб карты
                    polygonCoords={polygonCoords} // Координаты полигона
                    hintContent="Неровная зона" // Подсказка для полигона
                    fillColor="#FF0000" // Цвет заливки полигона
                    strokeColor="#0000FF" // Цвет границ полигона
                    opacity={0.6} // Прозрачность полигона
                    strokeWidth={3} // Толщина линий
                    strokeStyle="shortdash" // Стиль границ полигона
                  />
                  <h5 className="card-title">Ареал обитания</h5>
                  <p className="card-text">{cart.habitat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
