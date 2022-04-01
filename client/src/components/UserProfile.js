import React, { useContext } from 'react'
import { Context as UserContext } from '../context/UserContext'
import { Stack, Typography, Paper } from '@mui/material'

const UserProfile = () => {
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

				</Paper>

	)
}

export default UserProfile