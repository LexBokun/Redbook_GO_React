import React, { useState, useRef, useMemo, useEffect } from 'react'
import './style/App.css'
import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from 'react-router-dom'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
