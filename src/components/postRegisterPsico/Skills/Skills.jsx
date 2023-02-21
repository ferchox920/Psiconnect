import{ label, p, errorsText, divContainerMapCards, divContainerCard, xSpanCard } from '../PostRegisterPsico.module.css';
import{
    errorsSelect,
    select
} from '../Areas/Areas.module.css'


const Skills = ({skills, state, setState, errors}) => {

const handleInputSelectChange = (e) =>{
    const values =  e.target.value.split(",");

    if(!skills.some(el => el.id === values[1])) return

    if(errors.skills) delete errors.skills

    if(!state.skills.some((el)=> el.name === values[0])){
        setState({
        ...state,
        skills : state.skills.concat({name : values[0], id: values[1]}),
        })
    }else{
        setState({
            ...state,
            skills : state.skills.filter(el=> el.name !== values[0])
        })
    }
};
    return(
        <>
            <label className={label} >Habilidades</label>
            <p className={p}>
                *selecciona las habilidades que consideras tener
            </p>
            <span className={errorsText}>
                {errors.skills}
            </span>
            <select 
            className={errors.skills? errorsSelect : select}
            name="skils" 
            onChange={handleInputSelectChange} 
            required>
                <option
                key='skills' 
                value='Skills'
                selected 
                disabled>
                    Habilidades
                </option>
                {   
                    skills.map(el=>{
                        return(
                            <option 
                            disabled={state.skills.some(skill => skill.name === el.skill)? true : false}
                            key={el.id} 
                            id={el.skill} 
                            value={[el.skill, el.id]}> 
                            {el.skill}
                            </option>
                        )
                    })
                }
            </select>
            <div className={divContainerMapCards}>
                { 
                    state.skills.map(el=>{
                        return(
                            <div key={el.id} className={divContainerCard}>
                                <span>{el.name}</span>
                                <span 
                                className={xSpanCard} 
                                onClick={ ()=> handleInputSelectChange( {target:{value:`${el.name},${el.id}`}}) }>
                                    x
                                </span> 
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Skills;