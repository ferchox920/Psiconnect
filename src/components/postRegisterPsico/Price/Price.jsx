import{ label, p, errorsText } from '../PostRegisterPsico.module.css';
import{
    inputs,
    inputsErrors
} from '../Linkedin/Linkedin.module.css'
import validationsForm from '../validatorDatas.js';

const Price = ({state, setState, errors, setErrors}) => {

const handleInputChange = (e) => {
    if(errors.price) delete errors.price
    setState({
        ...state,
        price : e.target.value,
    })
    setErrors(validationsForm.price({
        ...errors,
        ...state,
        price : e.target.value
    }))
};

    return(
        <>
            <label className={label}> Precio </label>
            <p className={p}>
            *Selecciona el precio en USD (dólares estadounidenses) por hora de tus consultas
            </p>
            <span className={errorsText}>
                {errors.price}
            </span>
            <input
            className={errors.price? inputsErrors : inputs}
            type="number" 
            name='price'
            value={state.price}
            placeholder='$15'
            onChange={handleInputChange}
            />
        </>
    )
}
export default Price;