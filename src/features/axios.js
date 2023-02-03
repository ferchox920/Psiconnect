import axios from 'axios';


const instance = axios.create({
    baseURL: "https://ph0-api-production.up.railway.app/" //modifique la ruta que decia 5000 en vez de 3001
});

export default instance;