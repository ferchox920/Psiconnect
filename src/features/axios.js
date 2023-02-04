import axios from 'axios';


const instance = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL //modifique la ruta que decia 5000 en vez de 3001
});

export default instance;
