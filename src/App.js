import { ThemeProvider } from '@mui/system'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import { ProtectedRoute } from './components/ProtectedRoute'
import Register from './components/Register'
import { AuthProvider } from './context/AuthContext'
import theme from './temaConfig'

function App() {

  return (

    <ThemeProvider theme={theme}>
      <div className=' h-screen text-black flex'>
        <AuthProvider >
          <Routes>

            <Route path='/' element={
              <ProtectedRoute><Home></Home></ProtectedRoute>
            }></Route>

            <Route path='/login' element={<Login></Login>}></Route>

            <Route path='/register' element={<Register></Register>}></Route>

          </Routes>
        </AuthProvider>
      </div>
    </ThemeProvider>

  )
}

export default App