import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Protected from './components/Protected'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route element={<Protected/>}>
                    <Route exact path="/signup" element={<Signup />} />
                </Route>
                <Route exact path="/Home" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
