import { Button } from '@mui/material';
import React, { Component } from 'react'
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }
 
  render() {
    return (
      <Button onClick={this.logout}
					data-testid='profilebutton'
					variant='contained'
					id='paybutton2'
					to='/profile'
				>
					Logout
				</Button>
    )
  }
}
