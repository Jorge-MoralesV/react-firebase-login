import React, { } from 'react'
import { Select, TextField, MenuItem, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useForm } from '../context/FormContext';

const CuestionarioPt1 = () => {

    return (
        <div className='card p-4 pb-5 mb-4'>

            <label className='block text-center font-bold mb-4'>
                <h1>Datos generales</h1>
            </label>

            <div className='mb-4'>
                <FormControl>
                    <FormLabel id='sexo-label'>Sexo</FormLabel>
                    <RadioGroup
                        id='id_sexo'
                        aria-labelledby='sexo-label'
                        name="sexo"
                        /* onChange={(e) => updateFormData('sexo', e.target.value)}
                        value={formData.sexo} */
                        row
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
                        name="edad"
                        /* onChange={(e) => updateFormData('edad', e.target.value)}
                        value={formData.edad} */
                        row
                    >
                        <FormControlLabel value="15-29" control={<Radio />} label="15 a 29" />
                        <FormControlLabel value="30-39" control={<Radio />} label="30 a 39" />
                        <FormControlLabel value="40-49" control={<Radio />} label="40 a 49" />
                        <FormControlLabel value="50-59" control={<Radio />} label="50 a 59" />
                        <FormControlLabel value="60-mas" control={<Radio />} label="60 y más" />

                    </RadioGroup>
                </FormControl>
            </div>

            {/*<div className='mb-4'>
                <FormControl sx={{ minWidth: 120 }} fullWidth>
                    <FormLabel >Estado civil o conyugal</FormLabel>
                    <Select
                        id='id_estado_civil'
                        name='estado_civil'
                        defaultValue=''
                        displayEmpty
                        onChange={(e) => updateFormData('estado_civil', e.target.value)}
                        value={formData.estado_civil}
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
                        onChange={(e) => updateFormData('antiguedad', e.target.value)}
                        value={formData.antiguedad}
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
                        onChange={(e) => updateFormData('escolaridad', e.target.value)}
                        value={formData.escolaridad}
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
                        <MenuItem value='licenciatura'>Licenciatura</MenuItem>
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
                        onChange={(e) => updateFormData('horario_entrada', e.target.value)}
                        value={formData.horario_entrada}
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
                        id='id_horario_salida'
                        name='horario_salida'
                        defaultValue=''
                        displayEmpty
                        onChange={(e) => updateFormData('horario_salida', e.target.value)}
                        value={formData.horario_salida}
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
                        onChange={(e) => updateFormData('plaza', e.target.value)}
                        value={formData.plaza}
                        row
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
                        onChange={(e) => updateFormData('otro', e.target.value)}
                        value={formData.otro}
                    ></TextField>
                </FormControl>
            </div>

            <div className='mb-4'>
                <FormControl >
                    <FormLabel >¿Tienes alguna discapacidad?</FormLabel>
                    <RadioGroup
                        id='id_discapacidad'
                        name="discapacidad"
                        onChange={(e) => updateFormData('discapacidad', e.target.value)}
                        value={formData.discapacidad}
                        row
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
                        onChange={(e) => updateFormData('cual_discapacidad', e.target.value)}
                        value={formData.cual_discapacidad}
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
                        id='id_sector_poblacion'
                        name="sector_poblacion"
                        onChange={(e) => updateFormData('sector_poblacion', e.target.value)}
                        value={formData.sector_poblacion}
                        row
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
                        onChange={(e) => updateFormData('cual_sector', e.target.value)}
                        value={formData.cual_sector}
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
                        id='id_politica_igualdad'
                        name="politica_igualdad"
                        onChange={(e) => updateFormData('politica_igualdad', e.target.value)}
                        value={formData.politica_igualdad}
                        row
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
                        id='id_codigo_etica'
                        name="codigo_etica"
                        onChange={(e) => updateFormData('codigo_etica', e.target.value)}
                        value={formData.codigo_etica}
                        row
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
                        id='id_comite_igualdad'
                        name="comite_igualdad"
                        onChange={(e) => updateFormData('comite_igualdad', e.target.value)}
                        value={formData.comite_igualdad}
                        row
                    >
                        <FormControlLabel value="si" control={<Radio />} label="Sí" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className=''>
                <FormControl>
                    <FormLabel >¿En su centro de trabajo existe un mecanismo para prevenir, atender y sancionar las prácticas de discriminación y violencia laboral?</FormLabel>
                    <RadioGroup
                        id='id_mecanismo_prevencion'
                        name="mecanismo_prevencion"
                        onChange={(e) => updateFormData('mecanismo_prevencion', e.target.value)}
                        value={formData.mecanismo_prevencion}
                        row
                    >
                        <FormControlLabel value="si" control={<Radio />} label="Sí" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="nose" control={<Radio />} label="No sé" />
                    </RadioGroup>
                </FormControl>
            </div> */}

        </div>
    )
}

export default CuestionarioPt1