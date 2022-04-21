import React, { useState } from 'react'
import logo from '../assets/img/logo.svg'
import logotec from '../assets/img/logotec.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, Toolbar, AppBar, Button, Select, TextField, MenuItem, IconButton, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Container } from '@mui/material'
import { app } from '../firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { AlertGod } from './AlertGod';

const firestore = getFirestore(app)

const Home = () => {

    const [error, setError] = useState(false)

    const { user, logout, loading } = useAuth()

    const user_email = user.email

    const valorInicial = {
        correo: user_email,
        sexo: '',
        edad: '',
        estado_civil: '',
        antiguedad: '',
        escolaridad: '',
        horario_entrada: '',
        horario_salida: '',
        plaza: '',
        otro: '',
        discapacidad: '',
        cual_discapacidad: '',
        sector_poblacion: '',
        cual_sector: '',
        politica_igualdad: '',
        codigo_etica: '',
        comite_igualdad: '',
        mecanismo_prevencion: '',
        pregunta_1: '',
        pregunta_2: '',
        pregunta_3: '',
        pregunta_4: '',
        pregunta_5: '',
        pregunta_6: '',
        pregunta_7: '',
        pregunta_8: '',
        pregunta_9: '',
        pregunta_10: '',
        pregunta_11: '',
        pregunta_12: '',
        pregunta_13: '',
        pregunta_14: '',
        pregunta_15: '',
        pregunta_16: '',
        pregunta_17: '',
        pregunta_18: '',
        pregunta_19: '',
        pregunta_20: '',
        pregunta_21: '',
        pregunta_22: '',
        pregunta_23: '',
        pregunta_24: '',
        pregunta_25: '',
        pregunta_26: '',
        pregunta_27: '',
        pregunta_28: '',
        pregunta_29: '',
        pregunta_30: '',
        pregunta_31: '',
        pregunta_32: '',
        pregunta_33: '',
        pregunta_34: '',
        pregunta_35: '',
        pregunta_36: '',
        pregunta_37: '',
        pregunta_38: '',
        pregunta_39: '',
        pregunta_40: '',
        pregunta_41: '',
        pregunta_42: '',
        pregunta_43: '',
        pregunta_44: '',
        pregunta_45: '',
        pregunta_46: '',
        pregunta_47: '',
        pregunta_48: '',
        pregunta_49: '',
        pregunta_50: '',
        pregunta_51: '',
        pregunta_52: '',
        pregunta_53: '',
        pregunta_54: '',
        pregunta_55: '',
        pregunta_56: '',
    }

    const [usuario, setUsuario] = useState(valorInicial)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUsuario({ ...usuario, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(firestore, 'cuestionario'), {
                ...usuario
            })
            setError('Tus respuestas han sido enviadas')
        } catch (error) {
            setError(error.message)
        }
        setUsuario({ ...valorInicial })
    }

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            setError(error.message)
        }
    }

    if (loading) {
        return <h1>Loading</h1>
    }

    return (
        <Container>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <form
                id='task-form'
                className='card card-body bg-light f-screen w-full max-w-xl m-auto'>

                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <img src={logo} className='img-fluid mr-4'></img>
                        <Typography className='text-center' variant="h6" sx={{ flexGrow: 1 }}>
                        </Typography>
                        <IconButton onClick={handleLogout}>
                            <LogoutIcon fontSize='large' color='secondary' ></LogoutIcon>
                        </IconButton>
                        <img src={logotec} className='img-fluid ml-5 mr-2'></img>
                    </Toolbar>
                </AppBar>

                <div
                    className='px-8 p-4'>
                    <h1
                        className='text-xl text-center'>
                        Sesión como: &nbsp; {user.email}
                    </h1>
                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Datos generales</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel id='sexo-label'>Sexo</FormLabel>
                            <RadioGroup
                                id='id_sexo'
                                aria-labelledby='sexo-label'
                                name="sexo"
                                row
                                onChange={handleInputChange}
                                value={usuario.sexo}
                            >
                                <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                                <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                                <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >Edad</FormLabel>
                            <RadioGroup
                                required
                                id='id_edad'
                                row
                                name="edad"
                                onChange={handleInputChange}
                                value={usuario.edad}
                            >
                                <FormControlLabel value="15-29" control={<Radio />} label="15 a 29" />
                                <FormControlLabel value="30-39" control={<Radio />} label="30 a 39" />
                                <FormControlLabel value="40-49" control={<Radio />} label="40 a 49" />
                                <FormControlLabel value="50-59" control={<Radio />} label="50 a 59" />
                                <FormControlLabel value="60-mas" control={<Radio />} label="60 y más" />

                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl sx={{ minWidth: 120 }} fullWidth>
                            <FormLabel >Estado civil o conyugal</FormLabel>
                            <Select
                                id='id_estado_civil'
                                name='estado_civil'
                                defaultValue=''
                                displayEmpty
                                onChange={handleInputChange}
                                value={usuario.estado_civil}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Ninguno">
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value='soltera-o'>Soltera (o)</MenuItem>
                                <MenuItem value='casada-o'>Casado (o)</MenuItem>
                                <MenuItem value='union-libre'>Unión libre</MenuItem>
                                <MenuItem value='divorciada-o'>Divorciada (o)</MenuItem>
                                <MenuItem value='viuda-o'>Viuda (o)</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl sx={{ minWidth: 120 }} fullWidth>
                            <FormLabel >Años de antigüedad en el centro de trabajo</FormLabel>
                            <Select
                                id='id_antiguedad'
                                name='antiguedad'
                                defaultValue=''
                                displayEmpty
                                onChange={handleInputChange}
                                value={usuario.antiguedad}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Ninguno">
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value='menos-de-1'>Menos de un año</MenuItem>
                                <MenuItem value='1-3'>De 1 a 3 años</MenuItem>
                                <MenuItem value='4-9'>De 4 a 9 años</MenuItem>
                                <MenuItem value='mas-de-10'>Más de 10 años</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl sx={{ minWidth: 120 }} fullWidth >
                            <FormLabel >Escolaridad</FormLabel>
                            <Select
                                id='id_escolaridad'
                                name='escolaridad'
                                defaultValue=''
                                displayEmpty
                                onChange={handleInputChange}
                                value={usuario.escolaridad}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Ninguno">
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value='sin-escolaridad'>Sin escolaridad</MenuItem>
                                <MenuItem value='primaria'>Primaria</MenuItem>
                                <MenuItem value='secundaria'>Secundaria</MenuItem>
                                <MenuItem value='bachillerato-preparatoria'>Bachillerato o preparatoria</MenuItem>
                                <MenuItem value='carrera-tecnica'>Carrera técnica</MenuItem>
                                <MenuItem value='licenciatura'>Licanciatura</MenuItem>
                                <MenuItem value='maestria'>Maestria</MenuItem>
                                <MenuItem value='doctorado'>Doctorado</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl sx={{ minWidth: 120 }}  >
                            <FormLabel >Horario de trabajo</FormLabel>
                            <FormLabel >De</FormLabel>
                            <Select
                                id='id_horario_entrada'
                                name='horario_entrada'
                                defaultValue=''
                                displayEmpty
                                onChange={handleInputChange}
                                value={usuario.horario_entrada}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Ninguno">
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value='01'>01</MenuItem>
                                <MenuItem value='02'>02</MenuItem>
                                <MenuItem value='03'>03</MenuItem>
                                <MenuItem value='04'>04</MenuItem>
                                <MenuItem value='05'>05</MenuItem>
                                <MenuItem value='06'>06</MenuItem>
                                <MenuItem value='07'>07</MenuItem>
                                <MenuItem value='08'>08</MenuItem>
                                <MenuItem value='09'>09</MenuItem>
                                <MenuItem value='10'>10</MenuItem>
                                <MenuItem value='11'>11</MenuItem>
                                <MenuItem value='00'>12</MenuItem>
                            </Select>
                            <FormLabel >a</FormLabel>
                            <Select
                                defaultValue=''
                                id='id_horario_salida'
                                name='horario_salida'
                                displayEmpty
                                onChange={handleInputChange}
                                value={usuario.horario_salida}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Ninguno">
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value='01'>01</MenuItem>
                                <MenuItem value='02'>02</MenuItem>
                                <MenuItem value='03'>03</MenuItem>
                                <MenuItem value='04'>04</MenuItem>
                                <MenuItem value='05'>05</MenuItem>
                                <MenuItem value='06'>06</MenuItem>
                                <MenuItem value='07'>07</MenuItem>
                                <MenuItem value='08'>08</MenuItem>
                                <MenuItem value='09'>09</MenuItem>
                                <MenuItem value='10'>10</MenuItem>
                                <MenuItem value='11'>11</MenuItem>
                                <MenuItem value='00'>12</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl >
                            <FormLabel >Tipo de plaza</FormLabel>
                            <RadioGroup
                                id='id_plaza'
                                name='plaza'
                                row
                                onChange={handleInputChange}
                                value={usuario.plaza}
                            >
                                <FormControlLabel value="base" control={<Radio />} label="Base" />
                                <FormControlLabel value="confianza" control={<Radio />} label="Confianza" />
                                <FormControlLabel value="honorarios" control={<Radio />} label="Honorarios" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl fullWidth>
                            <FormLabel >Otro</FormLabel>
                            <TextField
                                required
                                id="id_otro"
                                type='text'
                                name='otro'
                                className='w-full'
                                variant="outlined"
                                placeholder='Especifique'
                                value={usuario.otro}
                                onChange={handleInputChange} />
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl >
                            <FormLabel >¿Tienes alguna discapacidad?</FormLabel>
                            <RadioGroup
                                id='id_discapacidad'
                                row
                                name="discapacidad"
                                onChange={handleInputChange}
                                value={usuario.discapacidad}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl sx={{ minWidth: 120 }} fullWidth >
                            <FormLabel >Cúal</FormLabel>
                            <Select
                                id='id_cual_discapacidad'
                                name='cual_discapacidad'
                                defaultValue=''
                                displayEmpty
                                onChange={handleInputChange}
                                value={usuario.cual_discapacidad}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Ninguno">
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value='intelectual'>Intelectual</MenuItem>
                                <MenuItem value='motriz'>Motriz</MenuItem>
                                <MenuItem value='auditiva'>Auditiva</MenuItem>
                                <MenuItem value='visual'>Visual</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >Solo para fines estadísticos de igualdad laboral y no discriminación, solicitamos conteste la siguiente pregunta de manera voluntaria</FormLabel>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >¿Formas parte de alguno de los siguientes sectores de la población?</FormLabel>
                            <RadioGroup
                                row
                                id='id_sector_poblacion'
                                name="sector_poblacion"
                                onChange={handleInputChange}
                                value={usuario.sector_poblacion}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl sx={{ minWidth: 120 }} fullWidth >
                            <FormLabel >Cúal</FormLabel>
                            <Select
                                id='id_cual_sector'
                                name='cual_sector'
                                defaultValue=''
                                displayEmpty
                                onChange={handleInputChange}
                                value={usuario.cual_sector}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Ninguno">
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value='diversidad'>De la diversidad sexual</MenuItem>
                                <MenuItem value='indigenas'>Indígenas</MenuItem>
                                <MenuItem value='afrodescendientes'>Afrodescendientes</MenuItem>
                                <MenuItem value='adultos-mayores'>Adultos mayores</MenuItem>
                                <MenuItem value='otros'>Otros</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >¿En su centro de trabajo  existe una política de igualdad laboral y no discriminación?</FormLabel>
                            <RadioGroup
                                row
                                id='id_politica_igualdad'
                                name="politica_igualdad"
                                onChange={handleInputChange}
                                value={usuario.politica_igualdad}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Sí" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >¿En su centro de trabajo existe un código de ética y/o conducta?</FormLabel>
                            <RadioGroup
                                row
                                id='id_codigo_etica'
                                name="codigo_etica"
                                onChange={handleInputChange}
                                value={usuario.codigo_etica}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Sí" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >¿En su centro de trabajo existe un comité de igualdad y no discriminación?</FormLabel>
                            <RadioGroup
                                row
                                id='id_comite_igualdad'
                                name="comite_igualdad"
                                onChange={handleInputChange}
                                value={usuario.comite_igualdad}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Sí" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >¿En su centro de trabajo existe un mecanismo para prevenir, atender y sancionar las prácticas de discriminación y violencia laboral?</FormLabel>
                            <RadioGroup
                                row
                                id='id_mecanismo_prevencion'
                                name="mecanismo_prevencion"
                                onChange={handleInputChange}
                                value={usuario.mecanismo_prevencion}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Sí" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Reclutamiento y selección de personal</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >1. ¿Para su contratación fue más importante ser mujer u hombre que sus habilidades profesionales?</FormLabel>
                            <RadioGroup
                                row
                                id='id_1'
                                name="pregunta_1"
                                onChange={handleInputChange}
                                value={usuario.pregunta_1}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >2. ¿En su centro de trabajo el proceso de contratación favorece más a personas jóvenes?</FormLabel>
                            <RadioGroup
                                row
                                id='id_2'
                                name="pregunta_2"
                                onChange={handleInputChange}
                                value={usuario.pregunta_2}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >3. ¿En el momento de su contratación, su edad fue determinante?</FormLabel>
                            <RadioGroup
                                row
                                id='id_3'
                                name="pregunta_3"
                                onChange={handleInputChange}
                                value={usuario.pregunta_3}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >4. ¿Para su contratación fue determinante su apariencia física?</FormLabel>
                            <RadioGroup
                                row
                                id='id_4'
                                name="pregunta_4"
                                onChange={handleInputChange}
                                value={usuario.pregunta_4}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Formación y capacitación</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >5. ¿En su centro de trabajo las oportunidades de desarrollo laboral solo las reciben unas cuántas personas privilegiadas?</FormLabel>
                            <RadioGroup
                                row
                                id='id_5'
                                name="pregunta_5"
                                onChange={handleInputChange}
                                value={usuario.pregunta_5}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >6. ¿En su centro de trabajo mujeres y hombres tienen por igual oportunidades de ascenso y capacitación?</FormLabel>
                            <RadioGroup
                                row
                                id='id_6'
                                name="pregunta_6"
                                onChange={handleInputChange}
                                value={usuario.pregunta_6}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >7. ¿En su centro de trabajo se cuenta con programas de capacitación en materia de igualdad laboral y no discriminación?</FormLabel>
                            <RadioGroup
                                row
                                id='id_7'
                                name="pregunta_7"
                                onChange={handleInputChange}
                                value={usuario.pregunta_7}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >8. ¿En los últimos 12 meses usted ha participado en programas de capacitación?</FormLabel>
                            <RadioGroup
                                row
                                id='id_8'
                                name="pregunta_8"
                                onChange={handleInputChange}
                                value={usuario.pregunta_8}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Permanencia y ascenso</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >9.	En su centro de trabajo para lograr la contratación, una promoción o un ascenso cuentan más las recomendaciones que los conocimientos y capacidades de la persona.</FormLabel>
                            <RadioGroup
                                row
                                id='id_9'
                                name="pregunta_9"
                                onChange={handleInputChange}
                                value={usuario.pregunta_9}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >10.	En su centro de trabajo se ha despedido a alguna mujer por embarazo u orillado a renunciar al regresar de su licencia de maternidad.</FormLabel>
                            <RadioGroup
                                row
                                id='id_10'
                                name="pregunta_10"
                                onChange={handleInputChange}
                                value={usuario.pregunta_10}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >11.	En su centro de trabajo la competencia por mejores puestos, condiciones laborales o salariales es justas.</FormLabel>
                            <RadioGroup
                                row
                                id='id_11'
                                name="pregunta_11"
                                onChange={handleInputChange}
                                value={usuario.pregunta_11}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >12.	En su centro de trabajo mujeres y hombres tienen las mismas oportunidades para ocupar puestos de decisión.</FormLabel>
                            <RadioGroup
                                row
                                id='id_12'
                                name="pregunta_12"
                                onChange={handleInputChange}
                                value={usuario.pregunta_12}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >13.	En su centro de trabajo se cuenta con un sistema de evaluación de desempeño del personal.</FormLabel>
                            <RadioGroup
                                row
                                id='id_13'
                                name="pregunta_13"
                                onChange={handleInputChange}
                                value={usuario.pregunta_13}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >14.	En los últimos 12 meses le han realizado una evaluación de desempeño.</FormLabel>
                            <RadioGroup
                                row
                                id='id_14'
                                name="pregunta_14"
                                onChange={handleInputChange}
                                value={usuario.pregunta_14}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Corresponsabilidad en la vida laboral, familiar y personal</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >15.	En su centro de trabajo tanto mujeres como hombres tienen las mismas facilidades para atender problemas familiares no previstos.</FormLabel>
                            <RadioGroup
                                row
                                id='id_15'
                                name="pregunta_15"
                                onChange={handleInputChange}
                                value={usuario.pregunta_15}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >16.	En su centro de trabajo las mujeres embarazadas enfrentan un clima laboral hostil.</FormLabel>
                            <RadioGroup
                                row
                                id='id_16'
                                name="pregunta_16"
                                onChange={handleInputChange}
                                value={usuario.pregunta_16}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >17.	En su centro de trabajo las personas que se hacen cargo de personas o familiares que requieren cuidados enfrentan un clima laboral hostil.</FormLabel>
                            <RadioGroup
                                row
                                id='id_17'
                                name="pregunta_17"
                                onChange={handleInputChange}
                                value={usuario.pregunta_17}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >18.	En su centro de trabajo los hombres cuentan con licencia de paternidad por nacimiento o adopción de una hija(o).</FormLabel>
                            <RadioGroup
                                row
                                id='id_18'
                                name="pregunta_18"
                                onChange={handleInputChange}
                                value={usuario.pregunta_18}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >19.	En su centro de trabajo la licencia de paternidad se otorga por más de cinco días.</FormLabel>
                            <RadioGroup
                                row
                                id='id_19'
                                name="pregunta_19"
                                onChange={handleInputChange}
                                value={usuario.pregunta_19}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >20. En su centro de trabajo se  otorgan permisos para atender situaciones familiares como cuidado de hijas e hijos, personas enfermas o personas adultas mayores.</FormLabel>
                            <RadioGroup
                                row
                                id='id_20'
                                name="pregunta_20"
                                onChange={handleInputChange}
                                value={usuario.pregunta_20}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >21. En su centro de trabajo existen convenios con prestadores de servicios que contemplen beneficios para el personal tales como: lavanderías, comedores, planchadurías, transporte, entre otros.</FormLabel>
                            <RadioGroup
                                row
                                id='id_21'
                                name="pregunta_21"
                                onChange={handleInputChange}
                                value={usuario.pregunta_21}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >22.	En su centro de trabajo, si usted decidiera usar las opciones de trabajo flexibles ¿se cuestionaría su compromiso ante su trabajo?</FormLabel>
                            <RadioGroup
                                row
                                id='id_22'
                                name="pregunta_22"
                                onChange={handleInputChange}
                                value={usuario.pregunta_22}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >23.	En su centro de trabajo usted puede acercarse a su jefa (e) inmediata (o)n para hablar sobre cuestiones relacionadas con horarios que le estén afectando.</FormLabel>
                            <RadioGroup
                                row
                                id='id_23'
                                name="pregunta_23"
                                onChange={handleInputChange}
                                value={usuario.pregunta_23}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Clima laboral libre de violencia</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >24.	Usted siente que se le trata con respeto en su trabajo actual.</FormLabel>
                            <RadioGroup
                                row
                                id='id_24'
                                name="pregunta_24"
                                onChange={handleInputChange}
                                value={usuario.pregunta_24}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >25.	En su centro de trabajo quienes realizan tareas personales para las y los jefes logran privilegios.</FormLabel>
                            <RadioGroup
                                row
                                id='id_25'
                                name="pregunta_25"
                                onChange={handleInputChange}
                                value={usuario.pregunta_25}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >26.	En su centro de trabajo todas las personas que laboran obtienen un trato digno y decente.</FormLabel>
                            <RadioGroup
                                row
                                id='id_26'
                                name="pregunta_26"
                                onChange={handleInputChange}
                                value={usuario.pregunta_26}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >27.	En su centro de trabajo las valoraciones que se realizan a sus actividades dependen más de la calidad y responsabilidad que de cualquier otra cuestión personal.</FormLabel>
                            <RadioGroup
                                row
                                id='id_27'
                                name="pregunta_27"
                                onChange={handleInputChange}
                                value={usuario.pregunta_27}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >28.	En su centro de trabajo, en general hay personas que discriminan, tratan mal o le faltan al respeto a sus compañeras (os), colegas o subordinadas (os).</FormLabel>
                            <RadioGroup
                                row
                                id='id_28'
                                name="pregunta_28"
                                onChange={handleInputChange}
                                value={usuario.pregunta_28}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >29.	En su centro de trabajo debido a sus características personales hay personas que sufren un trato inferior o de burla.</FormLabel>
                            <RadioGroup
                                row
                                id='id_29'
                                name="pregunta_29"
                                onChange={handleInputChange}
                                value={usuario.pregunta_29}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >30.	En su centro de trabajo las y los superiores reciben un trato mucho más respetuoso que subordinados (as) y personal administrativo.</FormLabel>
                            <RadioGroup
                                row
                                id='id_30'
                                name="pregunta_30"
                                onChange={handleInputChange}
                                value={usuario.pregunta_30}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >31.	En su centro de trabajo las y los superiores están abiertos a la comunicación con el personal.</FormLabel>
                            <RadioGroup
                                row
                                id='id_31'
                                name="pregunta_31"
                                onChange={handleInputChange}
                                value={usuario.pregunta_31}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >32.	En su centro de trabajo se da un trato inferior o discriminatorio a las personas con los más bajos niveles de sueldo.</FormLabel>
                            <RadioGroup
                                row
                                id='id_32'
                                name="pregunta_32"
                                onChange={handleInputChange}
                                value={usuario.pregunta_32}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >33.	En su centro de trabajo existen campañas de difusión internas de promoción de la igualdad laboral y no discriminación.</FormLabel>
                            <RadioGroup
                                row
                                id='id_33'
                                name="pregunta_33"
                                onChange={handleInputChange}
                                value={usuario.pregunta_33}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >34.	En su centro de trabajo se toman acciones como: asilamiento de sus compañeras(os), cambio de lugar repentinamente, falta de instrucciones, menosprecio del esfuerzo o propuestas, imposición de tareas sin los medios para realizarlas.</FormLabel>
                            <RadioGroup
                                row
                                id='id_34'
                                name="pregunta_34"
                                onChange={handleInputChange}
                                value={usuario.pregunta_34}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >35.	En su centro de trabajo las funciones y tareas se transmiten de manera clara y precisa.</FormLabel>
                            <RadioGroup
                                row
                                id='id_35'
                                name="pregunta_35"
                                onChange={handleInputChange}
                                value={usuario.pregunta_35}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >36.	En su centro de trabajo las cargas de trabajo se distribuyen de acuerdo a la responsabilidad del cargo.</FormLabel>
                            <RadioGroup
                                row
                                id='id_36'
                                name="pregunta_36"
                                onChange={handleInputChange}
                                value={usuario.pregunta_36}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >37.	Si manifiesto mi preocupación sobre algún asunto relacionado con la igualdad de género o prácticas discriminatorias, se le da seguimiento.</FormLabel>
                            <RadioGroup
                                row
                                id='id_37'
                                name="pregunta_37"
                                onChange={handleInputChange}
                                value={usuario.pregunta_37}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Acoso y hostigamiento</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >38.	En su centro de trabajo ha recibido, comentarios sugestivos o sexistas, bromas ofensivas, miradas obscenas o petición de pláticas indeseables relacionadas con asuntos sexuales.</FormLabel>
                            <RadioGroup
                                row
                                id='id_38'
                                name="pregunta_38"
                                onChange={handleInputChange}
                                value={usuario.pregunta_38}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >39.	En su centro de trabajo ha recibido proposiciones o peticiones directas o indirectas para establecer una relación sexual.</FormLabel>
                            <RadioGroup
                                row
                                id='id_39'
                                name="pregunta_39"
                                onChange={handleInputChange}
                                value={usuario.pregunta_39}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >40.	En su centro de trabajo ha vivido contacto físico sexual no deseado.</FormLabel>
                            <RadioGroup
                                row
                                id='id_40'
                                name="pregunta_40"
                                onChange={handleInputChange}
                                value={usuario.pregunta_40}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >41.	En su centro de trabajo se logran recompensas o incentivos laborales a cambio de favores sexuales.</FormLabel>
                            <RadioGroup
                                row
                                id='id_41'
                                name="pregunta_41"
                                onChange={handleInputChange}
                                value={usuario.pregunta_41}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >42.	En su centro de trabajo se reciben amenazas con daños o castigos en caso de no acceder a proporcionar  favores sexuales.</FormLabel>
                            <RadioGroup
                                row
                                id='id_42'
                                name="pregunta_42"
                                onChange={handleInputChange}
                                value={usuario.pregunta_42}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >43.	En su centro de trabajo ha recibido represalias sin razón o amenazas con relación a su permanencia en el trabajo.</FormLabel>
                            <RadioGroup
                                row
                                id='id_43'
                                name="pregunta_43"
                                onChange={handleInputChange}
                                value={usuario.pregunta_43}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >44. En caso de que haya sido víctima de acoso u hostigamiento sexual, en su centro de trabajo resolvieron satisfactoriamente su caso al interior o le canalizaron con las autoridades competentes.</FormLabel>
                            <RadioGroup
                                row
                                id='id_44'
                                name="pregunta_44"
                                onChange={handleInputChange}
                                value={usuario.pregunta_44}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >45.	En caso de ser acosada (o) u hostigada (o) sexual o laboralmente en su centro de trabajo sabe a qué autoridad puede dirigirse para denunciarlo.</FormLabel>
                            <RadioGroup
                                row
                                id='id_45'
                                name="pregunta_45"
                                onChange={handleInputChange}
                                value={usuario.pregunta_45}
                            >
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Accesibilidad</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >46.	En su centro de trabajo se cuenta con el espacio, mobiliario y equipo adecuado para personas con discapacidad.</FormLabel>
                            <RadioGroup
                                row
                                id='id_46'
                                name="pregunta_46"
                                onChange={handleInputChange}
                                value={usuario.pregunta_46}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >47.	Considera que las instalaciones de su centro de trabajo son adecuadas y accesibles para personas con discapacidad (rampas, estacionamiento, sanitarios, oficinas, pasillos, escaleras, elevadores, entre otros).</FormLabel>
                            <RadioGroup
                                row
                                id='id_47'
                                name="pregunta_47"
                                onChange={handleInputChange}
                                value={usuario.pregunta_47}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >48.	En su centro de trabajo se cuenta con los medios tecnológicos y de comunicación accesible para que cualquier persona con discapacidad desempeñe sus actividades de manera óptima.</FormLabel>
                            <RadioGroup
                                row
                                id='id_48'
                                name="pregunta_48"
                                onChange={handleInputChange}
                                value={usuario.pregunta_48}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >49.	En su centro de trabajo se contemplan mecanismos o políticas de inclusión laboral para personas con discapacidad, personas adultas mayores o con VIH, entre otras.</FormLabel>
                            <RadioGroup
                                row
                                id='id_49'
                                name="pregunta_49"
                                onChange={handleInputChange}
                                value={usuario.pregunta_49}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >50.	En su centro de trabajo se utiliza lenguaje incluyente y no sexista.</FormLabel>
                            <RadioGroup
                                row
                                id='id_50'
                                name="pregunta_50"
                                onChange={handleInputChange}
                                value={usuario.pregunta_50}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Respeto a la diversidad</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >51.	En su centro de trabajo hay un ambiente de respeto y no discriminación hacia las diferencias y preferencias sexuales.</FormLabel>
                            <RadioGroup
                                row
                                id='id_51'
                                name="pregunta_51"
                                onChange={handleInputChange}
                                value={usuario.pregunta_51}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >52.	En su centro de trabajo ha sido testigo de actos discriminatorios por ser mujer u hombre, por edad, apariencia, discapacidad, entre otros.</FormLabel>
                            <RadioGroup
                                row
                                id='id_52'
                                name="pregunta_52"
                                onChange={handleInputChange}
                                value={usuario.pregunta_52}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div
                    className='card p-4 pb-5 mb-4'>

                    <label
                        className='block text-center font-bold mb-4'>
                        <h1>Condiciones generales de trabajo</h1>
                    </label>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >53.	En su centro de trabajo se proporcionan las prestaciones de ley.</FormLabel>
                            <RadioGroup
                                row
                                id='id_53'
                                name="pregunta_53"
                                onChange={handleInputChange}
                                value={usuario.pregunta_53}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >54.	En su centro de trabajo las y los directivos apoyan la igualdad y no discriminación.</FormLabel>
                            <RadioGroup
                                row
                                id='id_54'
                                name="pregunta_54"
                                onChange={handleInputChange}
                                value={usuario.pregunta_54}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >55.	En su centro de trabajo los mecanismos utilizados para asegurar la igualdad y no discriminación son eficaces.</FormLabel>
                            <RadioGroup
                                row
                                id='id_55'
                                name="pregunta_55"
                                onChange={handleInputChange}
                                value={usuario.pregunta_55}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='mb-4'>
                        <FormControl>
                            <FormLabel >56.	En su centro de trabajo se recibe un salario igual por igual trabajo sin importar sexo, apariencia, edad u otras características personales.</FormLabel>
                            <RadioGroup
                                row
                                id='id_56'
                                name="pregunta_56"
                                onChange={handleInputChange}
                                value={usuario.pregunta_56}
                            >
                                <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                                <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                                <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                                <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                {error && <AlertGod message={error}></AlertGod>}

                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleSubmit}
                    disableElevation
                >
                    Enviar
                </Button>

            </form>

            <br></br>

        </Container>
    )
}

export default Home