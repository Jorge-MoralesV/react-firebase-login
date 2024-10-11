import React, { } from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useForm } from '../context/FormContext';

const CuestionarioPt5 = () => {

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
                <h1>Clima laboral libre de violencia</h1>
            </label>

            <div className='mb-4'>
                <FormControl>
                    <FormLabel >24.	Usted siente que se le trata con respeto en su trabajo actual.</FormLabel>
                    <RadioGroup
                        row
                        id='id_24'
                        name="pregunta_24"
                        onChange={handleChange}
                        value={formData.pregunta_24}
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
                        onChange={handleChange}
                        value={formData.pregunta_25}
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
                        onChange={handleChange}
                        value={formData.pregunta_26}
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
                        onChange={handleChange}
                        value={formData.pregunta_27}
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
                        onChange={handleChange}
                        value={formData.pregunta_28}
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
                        onChange={handleChange}
                        value={formData.pregunta_29}
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
                        onChange={handleChange}
                        value={formData.pregunta_30}
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
                        onChange={handleChange}
                        value={formData.pregunta_31}
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
                        onChange={handleChange}
                        value={formData.pregunta_32}
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
                        onChange={handleChange}
                        value={formData.pregunta_33}
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
                        onChange={handleChange}
                        value={formData.pregunta_34}
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
                        onChange={handleChange}
                        value={formData.pregunta_35}
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
                        onChange={handleChange}
                        value={formData.pregunta_36}
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
                    <FormLabel >37.	Si manifiesto mi preocupación sobre algún asunto relacionado con la igualdad de género o prácticas discriminatorias, se le da seguimiento.</FormLabel>
                    <RadioGroup
                        row
                        id='id_37'
                        name="pregunta_37"
                        onChange={handleChange}
                        value={formData.pregunta_37}
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

export default CuestionarioPt5;