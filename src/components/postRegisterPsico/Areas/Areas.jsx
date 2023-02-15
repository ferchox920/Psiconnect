import{ label, p, errorsText, divContainerMapCards, divContainerCard, xSpanCard } from '../PostRegisterPsico.module.css';
import{
    errorsSelect,
    select
} from './Areas.module.css'

const Areas = ({areas, state, setState, errors}) =>{
    
const handleInputSelectChange = (e) =>{
    const values =  e.target.value.split(",");

    if(!areas.some(el => el.id === values[1])) return

    if(errors.areas) delete errors.areas

    if(!state.areas.some((el)=> el.name === values[0])){
        setState({
        ...state,
        areas : state.areas.concat({name : values[0], id: values[1]}),
        })
    }else{
        setState({
            ...state,
            areas : state.areas.filter(el=> el.name !== values[0])
            })
    }
};
    return(
        <>
            <label className={label}>Areas</label>
            <p className={p}> 
                *selecciona las areas en las que trabajas
            </p>
            <span className={errorsText}> 
                {errors.areas}
            </span>
            <select 
            className={errors.areas? errorsSelect : select}
            name="areas" 
            onChange={handleInputSelectChange}  
            required>
                <option
                key='areas' 
                value='Areas'
                selected 
                disabled>
                    Areas
                </option>
                {   
                    areas.map(el=>{
                        return(
                            <option
                            disabled={state.areas.some(area => area.name === el.area)? true : false}
                            key={el.id} 
                            value={[el.area, el.id]}
                            id={el.area}>
                            {el.area}
                            </option>
                        )
                    })
                }
            </select>
            <div className={divContainerMapCards}>
                { 
                    state.areas.map(el => {
                        return(
                            <div key={el.id} className={divContainerCard}>
                            <span>{el.name}</span>
                            <span 
                            className={xSpanCard} 
                            onClick={()=>handleInputSelectChange( {target:{value:`${el.name},${el.id}`}}) }>
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
export default Areas;