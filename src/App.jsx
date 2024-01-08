import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'

function App() {

  return (
    <div class="container-fluid">
      <Header />
      <div id="spacer" style={{minHeight: '100vh'}}></div>
    </div>
  )
}

export default App
