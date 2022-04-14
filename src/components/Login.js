import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert } from './Alert'

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

            {error && <Alert message={error}></Alert>}

            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4'>

                <div className='mb-4'>
                    <label
                        className='block text-sm font-bold mb-2'
                        htmlFor='email'>
                        Email:
                    </label>
                    <input
                        className='shadow border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        onChange={handleChange}>
                    </input>
                </div>

                <div>
                    <label
                        className='block text-sm font-bold mb-2'
                        htmlFor='password'>
                        Password:
                    </label>
                    <input
                        className='shadow border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        onChange={handleChange}>
                    </input>
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <button
                        className='text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        Login
                    </button>

                    <a
                        onClick={handleResetPassword}
                        className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
                        Forgot password?
                    </a>
                </div>

            </form>

            <p className='my-4 text-sm flex justify-between px-3'>Don't have a account <Link to='/register'>Register</Link> </p>

            <button
                className='bg-slate-50 hover:bg-slate-200 shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'
                onClick={handleGoogleSingIn}>Login with Google
            </button>

        </div>
    )
}

export default Login