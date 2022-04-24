import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Protected from './components/Protected'
import Board from './components/Board'
import UserProfile from "./components/UserProfile";
import UserLogout from './components/UserLogout'
import './App.css'
import ChangePass from "./components/ChangePass";
const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route element={<Protected/>}>
                    <Route exact path="/board" element={<Board />} />
                    <Route exact path="/profile" element={<UserProfile />} />
                    <Route exact path='change_pass' element={<ChangePass/>} />
                </Route>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/logout" element={<UserLogout />} />
            </Routes>
        </div>
    )
}

export default App
