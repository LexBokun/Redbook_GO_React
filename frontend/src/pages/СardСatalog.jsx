import React from 'react'

import Postlist from '../components/Postlist'

export default function CartCatalog() {
  return (
    <div>
      <h1>Cart Catalog</h1>

      <Postlist title="Растения" carts={[{ id: 1, title: 'Милиса' }, { id: 2, title: 'Одуванчик' }]} />
      <Postlist title="Животные" carts={[{ id: 1, title: 'Кот' }, { id: 2, title: 'Собака' }, { id: 3, title: 'Лошадь' }, { id: 4, title: 'Коза' }]} />
          
    </div>
  )
}