import React, { useState, useContext } from "react";
import { Alert, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { Context as UserContext } from "../context/UserContext";
const Login = () => {
  return (
    <div>
      <form>
        <TextField
          id="filled-basic"
          label="username"
          name="username"
          variant="filled"
          required
        />
        <TextField
          id="filled-basic"
          label="password"
          variant="filled"
          name="password"
          required
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Button variant="contained" component={Link} to="/signup">
          Signup
        </Button>
      </form>
    </div>
  );
};


export default Login;