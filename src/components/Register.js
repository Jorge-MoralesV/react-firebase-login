import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert } from './Alert'

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
                        htmlFor='email'
                        className='block text-sm font-bold mb-2'>
                        Email
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
                        htmlFor='password'
                        className='block text-sm font-bold mb-2'>
                        Password
                    </label>
                    <input
                        className='shadow border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        onChange={handleChange}>
                    </input>
                </div>

                <button className='text-sm mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                    Register
                </button>

            </form>

            <p className='my-4 text-sm flex justify-between px-3'>I have a account <Link to='/login'>Login</Link> </p>

        </div>
    )
}

export default Register