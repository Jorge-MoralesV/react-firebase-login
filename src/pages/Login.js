import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert } from '../components/Alert'
import { Button, TextField } from '@mui/material'
import Navbar from '../components/Navbar'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { login, resetPassword } = useAuth()
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

    const handleResetPassword = async () => {
        if (!user.email) return setError('Por favor, ingresa tu correo.')
        try {
            await resetPassword(user.email)
            setError('We sent you an email with a link to reset your password')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <Navbar showLogout={false}></Navbar>

            <div className='w-full max-w-xs m-auto'>

                {error && <Alert message={error}></Alert>}

                <form className='bg-light shadow-md rounded px-8 pt-6 pb-6 mb-4'>

                    <div className='mb-4'>
                        <label
                            className='block text-sm font-bold mb-2'
                            htmlFor='email'>
                            Correo:
                        </label>
                        <TextField
                            id='email'
                            type='email'
                            name='email'
                            className='w-full bg-white'
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
                            id='password'
                            type='password'
                            name='password'
                            className='w-full bg-white'
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

                        <button
                            onClick={handleResetPassword}
                            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                            Olvide mi contraseña
                        </button>
                    </div>

                </form>

                <p className='text-blue-800 my-4 text-sm flex justify-between px-3'>No tengo una cuenta: <Link className='hover:text-blue-500' to='/register'>Registrarse</Link> </p>

            </div>
        </>
    )
}

export default Login;