import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App
