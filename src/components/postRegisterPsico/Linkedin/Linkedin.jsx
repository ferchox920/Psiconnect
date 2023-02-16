import{ label, p, errorsText } from '../PostRegisterPsico.module.css';
import{
    inputs,
    inputsErrors
} from './Linkedin.module.css'

const Linkedin = ({state, setState, errors}) => {

const handleInputChange = (e) => {
    if(errors.linkedin) delete errors.linkedin
    setState({
        ...state,
        linkedin : e.target.value,
    })
};

    return(
        <>
            <label className={label}> Linkedin </label>
            <p className={p}>
                *copie y pega el link de tu perfil de Linkedin
            </p>
            <span className={errorsText}>
                {errors.linkedin}
            </span>
            <input
            className={errors.linkedin? inputsErrors : inputs}
            type="text" 
            name='linkedin'
            value={state.linkedin}
            placeholder='https://www.linkedin.com/in/...'
            onChange={handleInputChange}
            />
        </>
    )
}
export default Linkedin;