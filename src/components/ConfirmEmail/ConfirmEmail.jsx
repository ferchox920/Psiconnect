import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { confirmEmailClient } from '../../features/apiPetitions';

const ConfirmEmail = () => {

const query = new URLSearchParams(useLocation().search);
const token = query.get('tkn')

const [ switchRequest, setSwitchRequest ] = useState(false)
const [ response, setResponse ] = useState(null)
const [ confirmToken, setConfirmToken ] = useState(null)

useEffect(()=>{
    if(!switchRequest){
        confirmEmailClient({
            state: setResponse,
            token:token,
            type:'local',
            userType:'professional'
        })
    }else setSwitchRequest(true)
},[])
useEffect(()=>{
    if(response?.status === 200) setConfirmToken(true)
    else if(response !== null) setConfirmToken(false)
},[response])

if(confirmToken === null){
    return(
            <div style={{'margin-top':'20rem', 'margin-bottom':'20rem'}}>
                <h1>CARGANDO...</h1>
            </div>
         )
}else if(confirmToken === false){
    return <Navigate to='/'/> 
}else return(
            <div style={{'margin-top':'20rem', 'margin-bottom':'20rem'}}>
                <h1>SuccessFully</h1>
            </div>
            )
}
export default ConfirmEmail;
