import React, { useState} from 'react';
import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from 'react-router-dom'

import MyNavbar from '../components/UI/navbar/MyNavbar'

import Main from '../pages/Main'
import CartMain from '../pages/CartMain'
import Login from '../pages/Login'
import Moderation from '../pages/Moderation'
import CartModeration from '../pages/CartModeration'
import CartCatalog from '../pages/СardСatalog' 

export default function AppRouter() {

  const [verification, setVerification] = useState(false)

  return (
    <div>
      <MyNavbar></MyNavbar>
      {verification
      ? 
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/catalog" element={<CartCatalog />} />
        <Route exact path="/catalog/:title" element={<CartMain />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/moderation" element={<Moderation />} />
        <Route exact path="/moderation/cart/:title" element={<CartModeration />} />  
      </Routes>
      :
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/catalog" element={<CartCatalog />} />
        <Route exact path="/catalog/:title" element={<CartMain />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      }
    </div>
  )
}

