import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert } from './Alert'
import logo from '../assets/img/logo.svg'
import logotec from '../assets/img/logotec.svg'
import { Typography, Toolbar, AppBar, Button, TextField } from '@mui/material'

function Register() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { signUp } = useAuth()
    const Navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError('')
        try {
            await signUp(user.email, user.password)
            Navigate('/')
        } catch (error) {
            if (error.code === "auth/weak-password") {
                setError('La contraseña debe ser mínimo de 6 caracteres.')
            } if (error.code === "auth/invalid-email") {
                setError('Correo invalido.')
            } if (error.code === "auth/user-not-found") {
                setError('Usuario no encontrado.')
            } if (error.code === "auth/wrong-password") {
                setError('La contraseña es incorrecta')
            } else {
                setError('Error desconocido.')
            }
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
                    className='bg-light shadow-md rounded px-8 pt-6 pb-6 mb-4'>

                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='block text-sm font-bold mb-2'>
                            Correo:
                        </label>
                        <TextField
                            type='email'
                            name='email'
                            className='w-full bg-white'
                            label='Ingresa tu correo'
                            variant="outlined"
                            onChange={handleChange} />
                    </div>

                    <div>
                        <label
                            htmlFor='password'
                            className='block text-sm font-bold mb-2'>
                            Contraseña:
                        </label>
                        <TextField
                            type='password'
                            name='password'
                            className='w-full bg-white'
                            label="Ingresa tu contraseña"
                            variant="outlined"
                            onChange={handleChange} />
                    </div>

                    <Button
                        className='mt-4'
                        variant='contained'
                        color='primary'
                        onClick={handleSubmit}
                        disableElevation>
                        <p>Registrar</p>
                    </Button>

                </form>
            </div>

            <p className='text-blue-800 my-4 text-sm flex justify-between px-3'>Tengo una cuenta<Link className='hover:text-blue-500' to='/login'>Iniciar sesión</Link> </p>

        </div>
    )
}

export default Register