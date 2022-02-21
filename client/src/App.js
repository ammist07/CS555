import React from 'react'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
