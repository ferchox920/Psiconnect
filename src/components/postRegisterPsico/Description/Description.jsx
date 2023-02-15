import{ label, p, } from '../PostRegisterPsico.module.css';
import { 
    errorsDescriptionContainer, 
    errorsDescription,
    containerDescription,
    description
} from './Description.module.css'
import validationsForm from '../validatorDatas.js';

const Description = ({state, setState, errors, setErrors}) => {

const handleInputChange = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value,
    })
    setErrors(
        validationsForm.description(
            {   ...state,
                [e.target.name] : e.target.value,
            }
    ))
};
    return(
        <>
            <label className={label}> Descripcion </label>
            <p className={p}>
                *escribe una breve descripción de tu perfil como profesional
                <br/>
                *CONSEJO* trata de añadir datos que creas importantes y relevantes de tu perfil
            </p>
            <span className={errorsDescription}>
                {errors.description}
            </span>
            <div className={errors.description? errorsDescriptionContainer : containerDescription}>
                <textarea 
                name="description"
                value={state.description} 
                placeholder='Descripcion'
                className={description}
                onChange={handleInputChange}>
                </textarea>
            </div>
        </>
    )
}

export default Description;