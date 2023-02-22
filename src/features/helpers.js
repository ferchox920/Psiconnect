import store from '../app/store';
import { setLoading } from './gobalSlice';


export async function loading(){
    await store.dispatch(setLoading())
    return
}