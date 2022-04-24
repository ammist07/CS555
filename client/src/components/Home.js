import React, {useContext, useState, useEffect} from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Context as UserContext } from '../context/UserContext'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import UserLogout from './UserLogout'

const Home = () => {
    const userContext = useContext(UserContext)
	const [diff, setDiff] = useState(3)
	const [done, setDone] = useState(true)

	useEffect(() => {
		userContext.setX(diff)
		setDone(true)
	}, [diff])
	const handleChange = async (event) => {
		event.preventDefault()
		setDone(false)
		await setDiff(parseInt(event.target.value))
	}
	const main = (
		<React.Fragment>
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
			<div>
				{userContext.state.user ? (
					<Button
						data-testid='homebutton'
						variant='contained'
						id='paybutton'
						component={Link}
						to='/board'
					>
						Play!
					</Button>
				) : (
					<Button
						data-testid='homebutton'
						variant='contained'
						id='paybutton'
						component={Link}
						to='/board'
					>
						Login to Play!
					</Button>
				)}
				<Button
					data-testid='profilebutton'
					variant='contained'
					id='paybutton2'
					component={Link}
					to='/profile'
				>
					Profile
				</Button>
				<UserLogout></UserLogout>
				<br />
				<br />
				<br />
				{userContext.state.isAuthenticated ? (
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue={3}
						name='radio-buttons-group'
						value={diff}
						onChange={handleChange}
					>
						<FormControlLabel
							value={3}
							control={<Radio />}
							label='Easy'
						/>
						<FormControlLabel
							value={4}
							control={<Radio />}
							label='Medium'
						/>
						<FormControlLabel
							value={5}
							control={<Radio />}
							label='Hard'
						/>
					</RadioGroup>
				) : null}
			</div>
		</React.Fragment>
	)
    return (
         <div>{done ? main : <div>Loading..</div>}</div>
    )
}

export default Home
