import React, { } from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useForm } from '../context/FormContext';

const CuestionarioPt4 = () => {

    const { formData, updateFormData } = useForm();

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);
    }

    return (
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
                        onChange={handleChange}
                        value={formData.pregunta_15}
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
                        onChange={handleChange}
                        value={formData.pregunta_16}
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
                        onChange={handleChange}
                        value={formData.pregunta_17}
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
                        onChange={handleChange}
                        value={formData.pregunta_18}
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
                        onChange={handleChange}
                        value={formData.pregunta_19}
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
                        onChange={handleChange}
                        value={formData.pregunta_20}
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
                        onChange={handleChange}
                        value={formData.pregunta_21}
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
                        onChange={handleChange}
                        value={formData.pregunta_22}
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
                    <FormLabel >23.	En su centro de trabajo usted puede acercarse a su jefa (e) inmediata (o)n para hablar sobre cuestiones relacionadas con horarios que le estén afectando.</FormLabel>
                    <RadioGroup
                        row
                        id='id_23'
                        name="pregunta_23"
                        onChange={handleChange}
                        value={formData.pregunta_23}
                    >
                        <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                        <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                        <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                        <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                    </RadioGroup>
                </FormControl>
            </div>

        </div>
    )
};

export default CuestionarioPt4;