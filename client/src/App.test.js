import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import Login from './components/Login'
// import Signup from './components/Signup'
// import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'

test('App Page', () => {
  render(
      <BrowserRouter>
        <App />
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

test('Login Page Form', () => {
  render(
      <BrowserRouter>
          <Login />
      </BrowserRouter>
  )
  const username_input = screen.getByRole('textbox', { name: 'username password'})
  expect(username_input).toBeInTheDocument()
})