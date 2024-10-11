import React, { } from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useForm } from '../context/FormContext';

const CuestionarioPt6 = () => {

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
                <h1>Acoso y hostigamiento</h1>
            </label>

            <div className='mb-4'>
                <FormControl>
                    <FormLabel >38.	En su centro de trabajo ha recibido, comentarios sugestivos o sexistas, bromas ofensivas, miradas obscenas o petición de pláticas indeseables relacionadas con asuntos sexuales.</FormLabel>
                    <RadioGroup
                        row
                        id='id_38'
                        name="pregunta_38"
                        onChange={handleChange}
                        value={formData.pregunta_38}
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
                        onChange={handleChange}
                        value={formData.pregunta_39}
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
                        onChange={handleChange}
                        value={formData.pregunta_40}
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
                        onChange={handleChange}
                        value={formData.pregunta_41}
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
                        onChange={handleChange}
                        value={formData.pregunta_42}
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
                        onChange={handleChange}
                        value={formData.pregunta_43}
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
                        onChange={handleChange}
                        value={formData.pregunta_44}
                    >
                        <FormControlLabel value="si" control={<Radio />} label="Si" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className=''>
                <FormControl>
                    <FormLabel >45.	En caso de ser acosada (o) u hostigada (o) sexual o laboralmente en su centro de trabajo sabe a qué autoridad puede dirigirse para denunciarlo.</FormLabel>
                    <RadioGroup
                        row
                        id='id_45'
                        name="pregunta_45"
                        onChange={handleChange}
                        value={formData.pregunta_45}
                    >
                        <FormControlLabel value="si" control={<Radio />} label="Si" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>

        </div>
    )
};

export default CuestionarioPt6;