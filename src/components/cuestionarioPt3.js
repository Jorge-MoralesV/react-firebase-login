import React, { } from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useForm } from '../context/FormContext';

const CuestionarioPt3 = () => {

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
                <h1>Permanencia y ascenso</h1>
            </label>

            <div className='mb-4'>
                <FormControl>
                    <FormLabel >9.	En su centro de trabajo para lograr la contratación, una promoción o un ascenso cuentan más las recomendaciones que los conocimientos y capacidades de la persona.</FormLabel>
                    <RadioGroup
                        row
                        id='id_9'
                        name="pregunta_9"
                        onChange={handleChange}
                        value={formData.pregunta_9}
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
                        onChange={handleChange}
                        value={formData.pregunta_10}
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
                        onChange={handleChange}
                        value={formData.pregunta_11}
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
                        onChange={handleChange}
                        value={formData.pregunta_12}
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
                        onChange={handleChange}
                        value={formData.pregunta_13}
                    >
                        <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                        <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                        <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />pregunta_14
                        <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className=''>
                <FormControl>
                    <FormLabel >14.	En los últimos 12 meses le han realizado una evaluación de desempeño.</FormLabel>
                    <RadioGroup
                        row
                        id='id_14'
                        name="pregunta_14"
                        onChange={handleChange}
                        value={formData.pregunta_14}
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

export default CuestionarioPt3;