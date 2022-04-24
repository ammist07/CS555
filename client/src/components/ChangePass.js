import React, {useState, useContext} from "react"
import {Alert, Button, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Context as UserContext} from "../context/UserContext"
import apis from '../api'

const ChangePass = () => {
    const userContext = useContext(UserContext)
    let navigate = useNavigate()
    const [form, setForm] = useState({
        password: ''
    })
    const [error, setError] = useState({
        state: false,
        message: ''
    })
    const formSubmit = async (e) => {
        e.preventDefault()
        const user = await apis.changePass({
            userId: userContext.state.user.id,
            password: form.password
        })
        await userContext.setIsAuthenticated(false)
        await userContext.setUser({})
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setForm(prev => ({...prev, [name]: value}))
    }

    return (
        <div>
            {error.state ? <Alert severity="error">{error.message}</Alert>: null }
            <form onSubmit={formSubmit}>
                <TextField
                    id="filled-basic"
                    label="New password"
                    variant="filled"
                    name="password"
                    required
                    value={form.password}
                    onChange={handleInputChange}
                    sx={{ backgroundColor: 'white', color: 'black' }}
                />
                <Button variant="contained" type='submit'>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default ChangePass
