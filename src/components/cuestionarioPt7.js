import React, { } from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useForm } from '../context/FormContext';

const CuestionarioPt7 = () => {

    return (
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
                    /* onChange={(e) => updateFormData('pregunta_46', e.target.value)}
                    value={formData.pregunta_46} */
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
                    /* onChange={(e) => updateFormData('pregunta_47', e.target.value)}
                    value={formData.pregunta_47} */
                    >
                        <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                        <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                        <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                        <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                    </RadioGroup>
                </FormControl>
            </div>

            {/*  <div className='mb-4'>
                <FormControl>
                    <FormLabel >48.	En su centro de trabajo se cuenta con los medios tecnológicos y de comunicación accesible para que cualquier persona con discapacidad desempeñe sus actividades de manera óptima.</FormLabel>
                    <RadioGroup
                        row
                        id='id_48'
                        name="pregunta_48"
                        onChange={(e) => updateFormData('pregunta_48', e.target.value)}
                        value={formData.pregunta_48}
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
                        onChange={(e) => updateFormData('pregunta_49', e.target.value)}
                        value={formData.pregunta_49}
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
                    <FormLabel >50.	En su centro de trabajo se utiliza lenguaje incluyente y no sexista.</FormLabel>
                    <RadioGroup
                        row
                        id='id_50'
                        name="pregunta_50"
                        onChange={(e) => updateFormData('pregunta_50', e.target.value)}
                        value={formData.pregunta_50}
                    >
                        <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                        <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                        <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                        <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                    </RadioGroup>
                </FormControl>
            </div> */}

        </div>
    )
};

export default CuestionarioPt7;