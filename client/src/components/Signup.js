import React, {useState} from 'react'
import {Alert, Button, TextField} from '@mui/material'
import {Link} from 'react-router-dom'

const Signup = () => {

    return (
        <div>
            <form>
                <TextField name="name" id="filled-basic" label="name" variant="filled" required/>
                <TextField name="username" id="filled-basic" label="username" variant="filled" required/>
                <TextField name="password" id="filled-basic" label="password" variant="filled" required/>
                <Button type="submit" variant="contained">Signup</Button>
                <Button variant="contained" component={Link} to="/login">Login</Button>
            </form>
        </div>
    )
}

export default Signup