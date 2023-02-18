import { inputError } from "../LoginUser.module.css";
const InputEmail = ({form, changeHandler, errors}) => {

    return(
        <>
            <input
            type="text"
            value={form.email}
            name="email"
            placeholder="Correo electrónico"
            onChange={changeHandler}
            className={errors.email ? inputError : null}
            required
            />
        </>
    )
}
export default InputEmail;