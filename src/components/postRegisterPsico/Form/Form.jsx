import Avatar from '../Avatar/Avatar.jsx';
import Description from '../Description/Description.jsx';
import Areas from '../Areas/Areas';
import Skills from '../Skills/Skills';
import Linkedin from '../Linkedin/Linkedin.jsx';
import Price from '../Price/Price.jsx';
import { form, inputSubmitDisabled, inputSubmit } from './Form.module.css';

const Form = (props) => {
    return(
        <>
            <form  
            className={form} 
            onSubmit={props.handleOnSubmit}>

            <Avatar 
            state={props.state} 
            setState={props.setState} 
            errors={props.errors}/>

            <Description 
            state={props.state} 
            setState={props.setState} 
            errors={props.errors}
            setErrors={props.setErrors} />

            <Areas 
            state={props.state} 
            setState={props.setState} 
            errors={props.errors}
            areas={props.areas} />

            <Skills
            state={props.state} 
            setState={props.setState} 
            errors={props.errors}
            skills={props.skills}/>

            <Linkedin 
            state={props.state} 
            setState={props.setState} 
            errors={props.errors}/>

            <Price 
            state={props.state} 
            setState={props.setState} 
            errors={props.errors}
            setErrors={props.setErrors}
            />

            <input 
            disabled={props.inputErrorChecker()}
            className={props.inputErrorChecker()? inputSubmitDisabled : inputSubmit }
            type='submit' 
            value='Actualizar' 
            />
            </form>
        </>
    )
}
export default Form;