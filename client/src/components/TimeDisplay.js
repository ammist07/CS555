import React from 'react'
import {Typography} from "@mui/material";
import Stack from "@mui/material/Stack";

const TimeDisplay = ({ time }) => {
	return (
		<div className='timer'>
			<Stack spacing={1} direction='row'>


			<Typography variant='h5' className='digits'>
				{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
			</Typography>
			<Typography variant='h5' className='digits'>
				{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.
			</Typography>
			<Typography variant='h5' className='digits mili-sec'>
				{('0' + ((time / 10) % 100)).slice(-2)}
			</Typography>
		</Stack>
		</div>
	)
}

export default TimeDisplay
