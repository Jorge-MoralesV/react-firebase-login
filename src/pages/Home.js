import React, { useEffect, useState } from 'react'
import { Button, Container } from '@mui/material'
import { useAuth } from '../context/AuthContext'

import { AlertSucces } from '../components/AlertSucces';
import Navbar from '../components/Navbar';
import CuestionarioPt1 from '../components/cuestionarioPt1';
import CuestionarioPt2 from '../components/cuestionarioPt2';
import CuestionarioPt3 from '../components/cuestionarioPt3';
import CuestionarioPt4 from '../components/cuestionarioPt4';
import CuestionarioPt5 from '../components/cuestionarioPt5';
import CuestionarioPt6 from '../components/cuestionarioPt6';
import CuestionarioPt7 from '../components/cuestionarioPt7';
import CuestionarioPt8 from '../components/cuestionarioPt8';
import { checkIfContestado, saveQuestionnaire, updateContestado } from '../firebaseService';
import { useForm } from '../context/FormContext';


const Home = () => {

    const { user } = useAuth();

    const { formData } = useForm();

    const [error, setError] = useState(false);

    const [contestado, setContestado] = useState(false);

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1);
    };

    useEffect(() => {
        const fetchContestado = async () => {
            const result = await checkIfContestado(user.uid);
            setContestado(result);
        };
        if (user) {
            fetchContestado();
        }
    }, [user]);

    /*     const user_email = user.email

    /*     const [usuario, setUsuario] = useState(valorInicial);
    
        const handleInputChange = (e) => {
            const { name, value } = e.target
            setUsuario({ ...usuario, [name]: value })
        }
    */
    const handleSubmit = async () => {
        try {
            await saveQuestionnaire(user.uid, formData)
            await updateContestado(user.uid, true);
            setContestado(true);
            setError('Tus respuestas han sido enviadas');
            console.log(formData);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleRetry = () => {
        setContestado(false);
        setStep(1);
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <CuestionarioPt1 />
            case 2:
                return <CuestionarioPt2 />
            case 3:
                return <CuestionarioPt3 />
            case 4:
                return <CuestionarioPt4 />
            case 5:
                return <CuestionarioPt5 />
            case 6:
                return <CuestionarioPt6 />
            case 7:
                return <CuestionarioPt7 />
            case 8:
                return <CuestionarioPt8 />
            default:
                return <CuestionarioPt1 />;
        }
    };

    return (
        <>
            <Navbar showLogout={true}></Navbar>

            <Container className='mt-5 mb-5'>

                {contestado ? (

                    <div className='card card-body bg-light f-screen w-100 max-w-xl mt-5 m-auto'>
                        <div className='px-8 p-4'>
                            <h1 className='text-xl text-center'>
                                Sesión como: &nbsp; {user.email}
                            </h1>
                        </div>

                        <h2 className='text-center mb-5'>Ya has contestado este formulario</h2>

                        <div>
                            <Button
                                className='w-50 me-auto'
                            >Ver respuestas</Button>
                            <Button
                                className='w-50 ms-auto'
                                onClick={handleRetry}
                            >Volver a contestar</Button>
                        </div>
                    </div>

                ) : (

                    <div className='card card-body bg-light f-screen w-100 max-w-xl mt-5 m-auto'>

                        <div className='px-8 p-4'>
                            <h1 className='text-xl text-center'>
                                Sesión como: &nbsp; {user.email}
                            </h1>
                        </div>

                        <form id='task-form'>

                            {renderStep()}

                            {error && <AlertSucces message={error}></AlertSucces>}

                            <div className='d-flex justify-content-between'>

                                {step > 1 && (
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        className='w-25 me-auto'
                                        disableElevation
                                        onClick={prevStep}
                                    >
                                        Anterior
                                    </Button>
                                )}

                                {step < 8 && (
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        className='w-25 ms-auto'
                                        disableElevation
                                        onClick={nextStep}
                                    >
                                        Siguiente
                                    </Button>
                                )}

                                {step > 7 && (
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        className='w-25 ms-auto'
                                        disableElevation
                                        onClick={handleSubmit}
                                    >
                                        Enviar
                                    </Button>
                                )}

                            </div>
                        </form>
                    </div>

                )}

            </Container>
        </>
    )
}

export default Home