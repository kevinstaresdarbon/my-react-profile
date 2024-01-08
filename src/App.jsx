import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import './App.css'

function App() {

  return (
    <>
      <div class="container-fluid m-0 p-0 w-100">
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App
