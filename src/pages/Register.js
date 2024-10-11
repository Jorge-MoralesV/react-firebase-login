import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert } from '../components/Alert'
import { Button, TextField } from '@mui/material'
import Navbar from '../components/Navbar'

const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        /* e.preventDefault() */
        setError('');
        try {
            await signUp(user.email, user.password);
            navigate('/')
        } catch (error) {
            if (error.code === "auth/weak-password") {
                setError('La contraseña debe ser mínimo de 6 caracteres.');
            } if (error.code === "auth/invalid-email") {
                setError('Correo invalido.');
            } if (error.code === "auth/user-not-found") {
                setError('Usuario no encontrado.');
            } if (error.code === "auth/wrong-password") {
                setError('La contraseña es incorrecta');
            } else {
                setError('Error desconocido.');
            }
        }
    }

    return (
        <>
            <Navbar showLogout={false}></Navbar>

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

                <p className='text-blue-800 my-4 text-sm flex justify-between px-3'>Tengo una cuenta:<Link className='hover:text-blue-500' to='/login'>Iniciar sesión</Link> </p>

            </div>
        </>
    )
}

export default Register;