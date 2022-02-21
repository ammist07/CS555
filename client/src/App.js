import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
