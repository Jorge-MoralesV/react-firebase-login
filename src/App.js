import { ThemeProvider } from '@mui/system'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import theme from './temaConfig'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FormProvider from './context/FormContext'

function App() {

  return (

    <ThemeProvider theme={theme}>
      <div className=' h-screen text-black flex'>
        <AuthProvider >
          <FormProvider>
            <Routes>

              <Route path='/home' element={
                <ProtectedRoute><Home /></ProtectedRoute>
              } />

              <Route path='/' element={<Login />} />

              <Route path='/register' element={<Register />} />

            </Routes>
          </FormProvider>
        </AuthProvider>
      </div>
    </ThemeProvider>

  );
}

export default App;