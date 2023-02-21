import{ label, p, errorsText } from '../PostRegisterPsico.module.css';
import{
    inputs,
    inputsErrors
} from '../Linkedin/Linkedin.module.css'

const Price = ({state, setState, errors}) => {

const handleInputChange = (e) => {
    if(errors.price) delete errors.price
    setState({
        ...state,
        price : e.target.value,
    })
};

    return(
        <>
            <label className={label}> Price </label>
            <p className={p}>
                *Selecciona el precio por hora de tus consultas
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