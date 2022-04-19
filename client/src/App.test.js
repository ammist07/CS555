import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Board from './components/Board'
import { BrowserRouter } from 'react-router-dom'
import React from "react";
import { Provider as UserProvider } from './context/UserContext'

test('App Page', () => {
    render(
        <BrowserRouter>
            <UserProvider>
                <App />
            </UserProvider>

        </BrowserRouter>
    )
})

test('Login Page', () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
})

test('Signup Page Form', () => {
    render(
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    )
    const username_input = screen.getByRole('textbox', { name: 'name username password' })
    expect(username_input).toBeInTheDocument()
})

test('Login Page Form', () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
    const username_input = screen.getByRole('textbox', { name: 'username password' })
    expect(username_input).toBeInTheDocument()
})

test('Signup Page', () => {
    render(
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    )
})
test('Home Page', () => {

    render(
        <BrowserRouter>
            <UserProvider>
                <Home />
            </UserProvider>

        </BrowserRouter>
    )
})

test('Board Page', () => {
    render(
        <BrowserRouter>
            <UserProvider>
                <Board />
            </UserProvider>
        </BrowserRouter>
    )
})

test('Flower in Cells', () => {
    render(
        <BrowserRouter>
         <UserProvider>
            <Board />
             </UserProvider>
        </BrowserRouter>
    )
    const username_input = screen.getByRole('table', { id: 'icon' })
    expect(username_input).toBeInTheDocument()
})
test('Cells on Board', () => {
    render(
        <BrowserRouter>
            <UserProvider>
                <Board/>
            </UserProvider>
        </BrowserRouter>
    )
    const username_input = screen.getByRole('table')
    expect(username_input).toBeInTheDocument()
})
test('User Check on Board', () => {
    const state = {
        isAuthenticated: false,
    }
    render(
        <UserProvider value={state}>
            <Board/>
        </UserProvider>
    )
    expect(screen.getByText(`Lets Play`)).toBeInTheDocument()
})

test('Profile Page test', () => {
	render(
		<BrowserRouter>
			<UserProvider>
				<Home />
			</UserProvider>
		</BrowserRouter>
	)
	const playbutton = screen.getByTestId('profilebutton')
	expect(playbutton).toBeInTheDocument()
})