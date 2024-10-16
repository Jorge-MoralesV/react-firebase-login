import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert } from '../components/Alert'
import { Button, TextField } from '@mui/material'
import Navbar from '../components/Navbar'

const Login = () => {

    const [register, setRegister] = useState(false);

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { login, signUp, resetPassword } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async e => {
        setError('')
        try {
            if (register) {
                await signUp(user.email, user.password);
                navigate('/');
            } else {
                await login(user.email, user.password)
                navigate('/');
            }
        } catch (error) {
            alertas(error);
        }
    }

    const handleResetPassword = async () => {
        if (!user.email) return setError('Por favor, ingresa tu correo.')
        try {
            await resetPassword(user.email)
            setError('Te hemos enviado un correo electrónico con un enlace para restablecer tu contraseña.')
        } catch (error) {
            alertas(error);
        }
    }

    const alertas = (error) => {
        const errorMessages = {
            "auth/invalid-email": 'Correo invalido.',
            "auth/missing-password": 'Ingrese una contraseña.',
            "auth/weak-password": 'La contraseña debe ser mínimo de 6 caracteres.',
            "auth/email-already-in-use": 'El usuario ya existe.',
            "auth/user-not-found": 'Usuario no encontrado.',
            "auth/wrong-password": 'La contraseña es incorrecta.'
        };
        const mensaje = errorMessages[error.code] || 'Error desconocido.';
        setError(mensaje);
        console.log(error.code)
    }

    const changeAuthMode = (isRegister) => () => {
        setRegister(isRegister);
    }

    return (
        <>
            <Navbar showLogout={false}></Navbar>

            {register ? (
                <div className='w-full max-w-xs m-auto'>
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
                                id='email'
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
                                id='password'
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
                            Registrarse
                        </Button>

                    </form>

                    <p className='text-blue-800 my-4 text-sm flex justify-between px-3'>Tengo una cuenta:<Link className='hover:text-blue-500' onClick={changeAuthMode(false)}>Iniciar sesión</Link> </p>

                </div>
            ) : (
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

                    <p className='text-blue-800 my-4 text-sm flex justify-between px-3'>No tengo una cuenta: <Link className='hover:text-blue-500' onClick={changeAuthMode(true)}>Registrarse</Link> </p>

                </div>
            )}

        </>
    )
}

export default Login;