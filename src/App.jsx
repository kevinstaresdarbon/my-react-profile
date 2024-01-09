import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Contacts from './components/Contacts.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className="container-fluid m-0 p-0 w-100">
        <Header />
        <Home />
        <Projects />
        <Contacts />
      </div>
    </>
  )
}

export default App
