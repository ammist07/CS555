import React, {useState, useContext} from "react";
import {Alert, Button, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Context as UserContext} from "../context/UserContext"
import apis from '../api'
import './Login.css'

const Login = () => {
    const userContext = useContext(UserContext)
    let navigate = useNavigate()
    const [form, setForm] = useState({
        username:'',
        password:''
    })
    const [error, setError] = useState({
        state: false,
        message: ''
    })

    const formSubmit = async (e) => {
        e.preventDefault()
        const user = await apis.chechUser(form)
        if(user.data.success === true ) {
            await userContext.setIsAuthenticated(true)
            await userContext.setUser({
                id: user.data.id,
                name: user.data.name,
                games: user.data.games,
            })
            navigate('/')
        } else {
            setError(prev => ({ ...prev, message: user.data.message, state: true}))
            setForm({username:'',password:''})
        }

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }) )
    }

    return (
        <div>
            {error.state ? <Alert severity="error">{error.message}</Alert>: null }
            <form onSubmit={formSubmit}>
                <TextField
                    id="filled-basic"
                    label="username"
                    name="username"
                    variant="filled"
                    required
                    value={form.username}
                    onChange={handleInputChange}
                    sx={{ backgroundColor: 'white', color: 'black' }}
                />
                <TextField
                    id="filled-basic"
                    label="password"
                    variant="filled"
                    name="password"
                    required
                    value={form.password}
                    onChange={handleInputChange}
                    sx={{ backgroundColor: 'white', color: 'black' }}
                />
                <Button type="submit" variant="contained">
                    Login
                </Button>
                <Button variant="contained" component={Link} to="/signup">
                    Signup
                </Button>
                <p>Game Instructions and Rules:</p>
                <p>  1. Sign up application</p>
                <p>  2. Login application using same credentials.</p>
                <p>  3. Select difficulty level</p>
                <p>  4. Click on play button.</p>
                <p>  5. You can check your scores using Profile button.</p>
                <p>  6. Click on logout button to logged out from the application. </p>
                <p>  7. It is an flower picking application.The background of the application will be a garden and in the 
                    Center there will be a 3x3 board for users to play the game.
                    Game starts with some random flowers of the board and then user will pick the flower by clicking on it,
                    but the trick is that once user will click of the particular flower, the neighboring boxes will spawn with flowers.
                    To win the game user has to pick all flowers.</p>
            </form>
        </div>
    );
};


export default Login;
