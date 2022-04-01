import React, { useContext, useState } from 'react'

import { Context as UserContext } from '../context/UserContext'
import { Stack, Typography, Paper } from '@mui/material'

const UserProfile = () => {
	const [done, setDone] = useState(false)
	const [lb, setLB] = useState([])
	const userContext = useContext(UserContext)
	return (
		<Paper
					elevation={3}
					sx={{
						padding: 5,
						backgroundColor: '#1E293B',
						color: 'white',
					}}
				>
					 <Stack spacing={5} direction='row'>
						<Typography variant='h5'>
							Name: {userContext.state.user.name}
						</Typography>
						<Typography variant='h5'>
							Games Played: {userContext.state.user.games}
						</Typography>
					</Stack>

				</Paper>

	)
}

export default UserProfile