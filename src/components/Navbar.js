import React, { Component } from 'react'
import { Typography, Toolbar, AppBar, IconButton } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../assets/img/logo.svg'
import logotec from '../assets/img/logotec.svg'
import { AuthContext } from '../context/AuthContext';

export class Navbar extends Component {

    static contextType = AuthContext;

    handleLogout = async () => {
        const { logout } = this.context;
        try {
            await logout();
        } catch (error) {
            console.log('cerrar')
        }
    }

    render() {

        const { showLogout } = this.props;

        return (
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <img src={logo} className='img-fluid mr-4' alt='logo' width={50} height={50}></img>

                    <Typography className='text-center' variant="p" sx={{ flexGrow: 1 }}>
                        Cuestionario de percepción de clima laboral y no discriminación
                    </Typography>

                    <img src={logotec} className='img-fluid mr-2' alt='logo-tec' width={50} height={55}></img>

                    {showLogout && (
                        <IconButton onClick={this.handleLogout}>
                            <LogoutIcon fontSize='large' color='secondary' ></LogoutIcon>
                        </IconButton>
                    )}

                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar