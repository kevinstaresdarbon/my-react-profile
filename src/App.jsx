import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import './App.css'

function App() {

  return (
    <div class="container-fluid">
      <Header />
      <Hero />
      <div id="spacer" style={{minHeight: '100vh'}}></div>
    </div>
  )
}

export default App
