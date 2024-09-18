import React, { useContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from 'react-router-dom'

import { AuthContext } from '../context'
import Main from '../pages/Main'
import CartMain from '../pages/CartMain'
import Login from '../pages/Login'
import Moderation from '../pages/Moderation'
import CartModeration from '../pages/CartModeration'
import CartCatalog from '../pages/СardСatalog'

export default function AppRouter() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/catalog" element={<CartCatalog />} />
          <Route exact path="/catalog/:id" element={<CartMain />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/moderation" element={<Moderation />} />
          <Route exact path="/moderation/cart/:title" element={<CartModeration />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/catalog" element={<CartCatalog />} />
          <Route exact path="/catalog/:id" element={<CartMain />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  )
}
