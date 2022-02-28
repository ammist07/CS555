import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'

test('App Page', () => {
  render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  )
})
