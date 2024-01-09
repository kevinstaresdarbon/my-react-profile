import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Contacts from './components/Contacts.jsx'
import './App.css'

function App() {

  return (
    <Router basename='/my-react-profile'>
      <div className="container-fluid m-0 p-0 w-100" style={{minHeight: '100vh'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
