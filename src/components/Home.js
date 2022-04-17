import React from 'react'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/img/logo.svg'
import logotec from '../assets/img/logotec.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, Toolbar, AppBar, Button, Select, TextField, MenuItem, IconButton, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'


function Home() {

    const { user, logout, loading } = useAuth()

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error(error)
        }
    }

    if (loading) {
        return <h1>Loading</h1>
    }

    return (
        <div
            className='bg-slate-300 f-screen w-full max-w-xl m-auto'>

            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <img src={logo} className='img-fluid mr-4'></img>
                    <Typography className='text-center' variant="h6" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <IconButton>
                        <LogoutIcon fontSize='large' color='secondary' onClick={handleLogout}></LogoutIcon>
                    </IconButton>
                    <img src={logotec} className='img-fluid ml-5 mr-2'></img>
                </Toolbar>
            </AppBar>

            <br></br>

            <div
                className='px-8 pt-4 pb-4 mt-20'>
                <h1
                    className='text-xl text-center'>
                    Sesión como: {user.displayName || user.email}
                </h1>
            </div>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-10'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Datos generales</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Sexo</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                            <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Edad</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">Estado civil o conyugal</FormLabel>
                        <Select
                            //value={age}
                            //onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='soltero'>Soltera (o)</MenuItem>
                            <MenuItem value='casado'>Casado (o)</MenuItem>
                            <MenuItem value='unionlibre'>Unión libre</MenuItem>
                            <MenuItem value='divorciado'>Divorciada (o)</MenuItem>
                            <MenuItem value='viudo'>Viuda (o)</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl sx={{ minWidth: 120 }} fullWidth>
                        <FormLabel id="demo-row-radio-buttons-group-label">Años de antigüedad en el centro de trabajo</FormLabel>
                        <Select
                            //value={age}
                            //onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
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
                        <FormLabel id="demo-row-radio-buttons-group-label">Escolaridad</FormLabel>
                        <Select
                            //value={age}
                            //onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
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
                        <FormLabel id="demo-row-radio-buttons-group-label">Horario de trabajo</FormLabel>
                        <FormLabel id="demo-row-radio-buttons-group-label">De</FormLabel>
                        <Select
                            //value={age}
                            //onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
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
                        <FormLabel id="demo-row-radio-buttons-group-label">a</FormLabel>
                        <Select
                            //value={age}
                            //onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
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
                        <FormLabel id="demo-row-radio-buttons-group-label">Tipo de plaza</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="base" control={<Radio />} label="Base" />
                            <FormControlLabel value="confianza" control={<Radio />} label="Confianza" />
                            <FormControlLabel value="honorarios" control={<Radio />} label="Honorarios" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl fullWidth>
                        <FormLabel id="demo-row-radio-buttons-group-label">Otro especifique</FormLabel>
                        <TextField
                            type='text'
                            name='otro'
                            className='w-full'
                            id="outlined-basic"
                            variant="outlined" />
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl >
                        <FormLabel id="demo-row-radio-buttons-group-label">¿Tienes alguna discapacidad?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl sx={{ minWidth: 120 }} fullWidth >
                        <FormLabel id="demo-row-radio-buttons-group-label">Cúal</FormLabel>
                        <Select
                            //value={age}
                            //onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
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
                        <FormLabel id="demo-row-radio-buttons-group-label">Solo para fines estadísticos de igualdad laboral y no discriminación, solicitamos conteste la siguiente pregunta de manera voluntaria</FormLabel>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">¿Formas parte de alguno de los siguientes sectores de la población?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl sx={{ minWidth: 120 }} fullWidth >
                        <FormLabel id="demo-row-radio-buttons-group-label">Cúal</FormLabel>
                        <Select
                            //value={age}
                            //onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
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
                        <FormLabel id="demo-row-radio-buttons-group-label">¿En su centro de trabajo  existe una política de igualdad laboral y no discriminación?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Sí" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                            <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">¿En su centro de trabajo existe un código de ética y/o conducta?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Sí" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                            <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">¿En su centro de trabajo existe un comité de igualdad y no discriminación?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Sí" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                            <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">¿En su centro de trabajo existe un mecanismo para prevenir, atender y sancionar las prácticas de discriminación y violencia laboral?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Sí" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                            <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Reclutamiento y selección de personal</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">1. ¿Para su contratación fue más importante ser mujer u hombre que sus habilidades profesionales?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">2. ¿En su centro de trabajo el proceso de contratación favorece más a personas jóvenes?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">3. ¿En el momento de su contratación, su edad fue determinante?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">4. ¿Para su contratación fue determinante su apariencia física?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>


            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Formación y capacitación</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">5. ¿En su centro de trabajo las oportunidades de desarrollo laboral solo las reciben unas cuántas personas privilegiadas?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">6. ¿En su centro de trabajo mujeres y hombres tienen por igual oportunidades de ascenso y capacitación?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">7. ¿En su centro de trabajo se cuenta con programas de capacitación en materia de igualdad laboral y no discriminación?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">8. ¿En los últimos 12 meses usted ha participado en programas de capacitación?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Permanencia y ascenso</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">9.	En su centro de trabajo para lograr la contratación, una promoción o un ascenso cuentan más las recomendaciones que los conocimientos y capacidades de la persona.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">10.	En su centro de trabajo se ha despedido a alguna mujer por embarazo u orillado a renunciar al regresar de su licencia de maternidad.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">11.	En su centro de trabajo la competencia por mejores puestos, condiciones laborales o salariales es justas.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">12.	En su centro de trabajo mujeres y hombres tienen las mismas oportunidades para ocupar puestos de decisión.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">13.	En su centro de trabajo se cuenta con un sistema de evaluación de desempeño del personal.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">14.	En los últimos 12 meses le han realizado una evaluación de desempeño.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Corresponsabilidad en la vida laboral, familiar y personal</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">15.	En su centro de trabajo tanto mujeres como hombres tienen las mismas facilidades para atender problemas familiares no previstos.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">16.	En su centro de trabajo las mujeres embarazadas enfrentan un clima laboral hostil.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">17.	En su centro de trabajo las personas que se hacen cargo de personas o familiares que requieren cuidados enfrentan un clima laboral hostil.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">18.	En su centro de trabajo los hombres cuentan con licencia de paternidad por nacimiento o adopción de una hija(o).</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">19.	En su centro de trabajo la licencia de paternidad se otorga por más de cinco días.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">20. En su centro de trabajo se  otorgan permisos para atender situaciones familiares como cuidado de hijas e hijos, personas enfermas o personas adultas mayores.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">21. En su centro de trabajo existen convenios con prestadores de servicios que contemplen beneficios para el personal tales como: lavanderías, comedores, planchadurías, transporte, entre otros.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">22.	En su centro de trabajo, si usted decidiera usar las opciones de trabajo flexibles ¿se cuestionaría su compromiso ante su trabajo?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">23.	En su centro de trabajo usted puede acercarse a su jefa (e) inmediata (o)n para hablar sobre cuestiones relacionadas con horarios que le estén afectando.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Clima laboral libre de violencia</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">24.	Usted siente que se le trata con respeto en su trabajo actual.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">25.	En su centro de trabajo quienes realizan tareas personales para las y los jefes logran privilegios.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">26.	En su centro de trabajo todas las personas que laboran obtienen un trato digno y decente.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">27.	En su centro de trabajo las valoraciones que se realizan a sus actividades dependen más de la calidad y responsabilidad que de cualquier otra cuestión personal.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">28.	En su centro de trabajo, en general hay personas que discriminan, tratan mal o le faltan al respeto a sus compañeras (os), colegas o subordinadas (os).</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">29.	En su centro de trabajo debido a sus características personales hay personas que sufren un trato inferior o de burla.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">30.	En su centro de trabajo las y los superiores reciben un trato mucho más respetuoso que subordinados (as) y personal administrativo.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">31.	En su centro de trabajo las y los superiores están abiertos a la comunicación con el personal.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">32.	En su centro de trabajo se da un trato inferior o discriminatorio a las personas con los más bajos niveles de sueldo.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">33.	En su centro de trabajo existen campañas de difusión internas de promoción de la igualdad laboral y no discriminación.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">34.	En su centro de trabajo se toman acciones como: asilamiento de sus compañeras(os), cambio de lugar repentinamente, falta de instrucciones, menosprecio del esfuerzo o propuestas, imposición de tareas sin los medios para realizarlas.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">35.	En su centro de trabajo las funciones y tareas se transmiten de manera clara y precisa.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">36.	En su centro de trabajo las cargas de trabajo se distribuyen de acuerdo a la responsabilidad del cargo.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">37.	Si manifiesto mi preocupación sobre algún asunto relacionado con la igualdad de género o prácticas discriminatorias, se le da seguimiento.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Acoso y hostigamiento</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">38.	En su centro de trabajo ha recibido, comentarios sugestivos o sexistas, bromas ofensivas, miradas obscenas o petición de pláticas indeseables relacionadas con asuntos sexuales.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">39.	En su centro de trabajo ha recibido proposiciones o peticiones directas o indirectas para establecer una relación sexual.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">40.	En su centro de trabajo ha vivido contacto físico sexual no deseado.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">41.	En su centro de trabajo se logran recompensas o incentivos laborales a cambio de favores sexuales.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">42.	En su centro de trabajo se reciben amenazas con daños o castigos en caso de no acceder a proporcionar  favores sexuales.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">43.	En su centro de trabajo ha recibido represalias sin razón o amenazas con relación a su permanencia en el trabajo.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">44. En caso de que haya sido víctima de acoso u hostigamiento sexual, en su centro de trabajo resolvieron satisfactoriamente su caso al interior o le canalizaron con las autoridades competentes.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">45.	En caso de ser acosada (o) u hostigada (o) sexual o laboralmente en su centro de trabajo sabe a qué autoridad puede dirigirse para denunciarlo.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Accesibilidad</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">46.	En su centro de trabajo se cuenta con el espacio, mobiliario y equipo adecuado para personas con discapacidad.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">47.	Considera que las instalaciones de su centro de trabajo son adecuadas y accesibles para personas con discapacidad (rampas, estacionamiento, sanitarios, oficinas, pasillos, escaleras, elevadores, entre otros).</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">48.	En su centro de trabajo se cuenta con los medios tecnológicos y de comunicación accesible para que cualquier persona con discapacidad desempeñe sus actividades de manera óptima.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">49.	En su centro de trabajo se contemplan mecanismos o políticas de inclusión laboral para personas con discapacidad, personas adultas mayores o con VIH, entre otras.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">50.	En su centro de trabajo se utiliza lenguaje incluyente y no sexista.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Respeto a la diversidad</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">51.	En su centro de trabajo hay un ambiente de respeto y no discriminación hacia las diferencias y preferencias sexuales.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">52.	En su centro de trabajo ha sido testigo de actos discriminatorios por ser mujer u hombre, por edad, apariencia, discapacidad, entre otros.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 mt-5'>

                <label
                    className='block text-center font-bold mb-4'>
                    <h1>Condiciones generales de trabajo</h1>
                </label>

                <div className='mb-4'>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">53.	En su centro de trabajo se proporcionan las prestaciones de ley.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">54.	En su centro de trabajo las y los directivos apoyan la igualdad y no discriminación.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">55.	En su centro de trabajo los mecanismos utilizados para asegurar la igualdad y no discriminación son eficaces.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
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
                        <FormLabel id="demo-row-radio-buttons-group-label">56.	En su centro de trabajo se recibe un salario igual por igual trabajo sin importar sexo, apariencia, edad u otras características personales.</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </form>

        </div>
    )
}

export default Home