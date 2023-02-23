import zIndex from "@mui/material/styles/zIndex";
import { loading } from "../features/helpers";

export default function Test(){
return(<div >
    <button style={{
    position:'relative',
    zIndex:120,
}} onClick={()=>loading()}>test</button>
</div>)
}