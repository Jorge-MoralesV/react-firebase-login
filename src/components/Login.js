import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert } from './Alert'
import logo from '../assets/img/logo.svg'
import logotec from '../assets/img/logotec.svg'
import { Typography, Toolbar, AppBar, Button, TextField } from '@mui/material'

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { login, loginWithGoogle, resetPassword } = useAuth()
    const Navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            Navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleGoogleSingIn = async () => {
        try {
            await loginWithGoogle()
            Navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleResetPassword = async () => {
        if (!user.email) return setError('Please enter your email')
        try {
            await resetPassword(user.email)
            setError('We sent you an email with a link to reset your password')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='w-full max-w-xs m-auto'>

            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <img src={logo} className='img-fluid mr-4'></img>
                    <Typography className='text-center' variant="h6" sx={{ flexGrow: 1 }}>
                        Cuestionario de percepción de clima laboral y no discriminación
                    </Typography>
                    <img src={logotec} className='img-fluid mr-2'></img>
                </Toolbar>
            </AppBar>

            <div className='mt-20'>

                <br></br>

                {error && <Alert message={error}></Alert>}

                <form
                    //onSubmit={handleSubmit}
                    className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4'>

                    <div className='mb-4'>
                        <label
                            className='block text-sm font-bold mb-2'
                            htmlFor='email'>
                            Correo:
                        </label>
                        <TextField
                            type='email'
                            name='email'
                            className='w-full'
                            label='Ingresa tu correo'
                            variant="outlined"
                            onChange={handleChange}></TextField>

                    </div>

                    <div>
                        <label
                            className='block text-sm font-bold mb-2'
                            htmlFor='password'>
                            Contraseña:
                        </label>
                        <TextField
                            type='password'
                            name='password'
                            className='w-full'
                            label="Ingresa tu contraseña"
                            variant="outlined"
                            onChange={handleChange} />
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleSubmit}
                            disableElevation>
                            <p>Ingresar</p>
                        </Button>

                        <a
                            onClick={handleResetPassword}
                            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                            Olvide mi contraseña
                        </a>
                    </div>

                </form>
            </div>

            <p className='text-blue-800 my-4 text-sm flex justify-between px-3'>No tengo una cuenta <Link className='hover:text-blue-500' to='/register'>Registrarse</Link> </p>

        </div>
    )
}

export default Login