import React, { } from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useForm } from '../context/FormContext';

const CuestionarioPt8 = () => {

    return (
        <>
            <div className='card p-4 pb-5 mb-4'>

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
                            /* onChange={(e) => updateFormData('pregunta_51', e.target.value)}
                            value={formData.pregunta_51} */
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className=''>
                    <FormControl>
                        <FormLabel >52.	En su centro de trabajo ha sido testigo de actos discriminatorios por ser mujer u hombre, por edad, apariencia, discapacidad, entre otros.</FormLabel>
                        <RadioGroup
                            row
                            id='id_52'
                            name="pregunta_52"
                            /* onChange={(e) => updateFormData('pregunta_52', e.target.value)}
                            value={formData.pregunta_52} */
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </div>

            {/* <div className='card p-4 pb-5 mb-4'>

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
                            onChange={(e) => updateFormData('pregunta_53', e.target.value)}
                            value={formData.pregunta_53}
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
                            onChange={(e) => updateFormData('pregunta_54', e.target.value)}
                            value={formData.pregunta_54}
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
                            onChange={(e) => updateFormData('pregunta_55', e.target.value)}
                            value={formData.pregunta_55}
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className=''>
                    <FormControl>
                        <FormLabel >56.	En su centro de trabajo se recibe un salario igual por igual trabajo sin importar sexo, apariencia, edad u otras características personales.</FormLabel>
                        <RadioGroup
                            row
                            id='id_56'
                            name="pregunta_56"
                            onChange={(e) => updateFormData('pregunta_56', e.target.value)}
                            value={formData.pregunta_56}
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </div> */}
        </>
    )
};

export default CuestionarioPt8;