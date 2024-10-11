import React, { } from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useForm } from '../context/FormContext';

const CuestionarioPt2 = () => {

    return (
        <>
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
                        /* onChange={(e) => updateFormData('pregunta_1', e.target.value)}
                        value={formData.pregunta_1} */
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
                        /* onChange={(e) => updateFormData('pregunta_2', e.target.value)}
                        value={formData.pregunta_2} */
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                {/*<div className='mb-4'>
                    <FormControl>
                        <FormLabel >3. ¿En el momento de su contratación, su edad fue determinante?</FormLabel>
                        <RadioGroup
                            row
                            id='id_3'
                            name="pregunta_3"
                            onChange={(e) => updateFormData('pregunta_3', e.target.value)}
                            value={formData.pregunta_3}
                        >
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className=''>
                    <FormControl>
                        <FormLabel >4. ¿Para su contratación fue determinante su apariencia física?</FormLabel>
                        <RadioGroup
                            row
                            id='id_4'
                            name="pregunta_4"
                            onChange={(e) => updateFormData('pregunta_4', e.target.value)}
                            value={formData.pregunta_4}
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
                            onChange={(e) => updateFormData('pregunta_5', e.target.value)}
                            value={formData.pregunta_5}
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
                            onChange={(e) => updateFormData('pregunta_6', e.target.value)}
                            value={formData.pregunta_6}
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
                            onChange={(e) => updateFormData('pregunta_7', e.target.value)}
                            value={formData.pregunta_7}
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
                        <FormLabel >8. ¿En los últimos 12 meses usted ha participado en programas de capacitación?</FormLabel>
                        <RadioGroup
                            row
                            id='id_8'
                            name="pregunta_8"
                            onChange={(e) => updateFormData('pregunta_8', e.target.value)}
                            value={formData.pregunta_8}
                        >
                            <FormControlLabel value="nunca" control={<Radio />} label="Nunca" />
                            <FormControlLabel value="algunas-veces" control={<Radio />} label="Algunas veces" />
                            <FormControlLabel value="frecuencia" control={<Radio />} label="Con frecuencia" />
                            <FormControlLabel value="siempre" control={<Radio />} label="Siempre" />
                        </RadioGroup>
                    </FormControl>
                </div> */}

            </div>
        </>
    )

};

export default CuestionarioPt2;