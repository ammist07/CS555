import React, {useState, useContext} from "react"
import {Alert, Button, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Context as UserContext} from "../context/UserContext"
import apis from '../api'

const ChangePass = () => {
    const userContext = useContext(UserContext)
    let navigate = useNavigate()
    const [form, setForm] = useState({
        password:''
    })
    const [error, setError] = useState({
        state: false,
        message: ''
    })

    return (
        <div>
            Chnage Pass
        </div>
    )
}

export default ChangePass
