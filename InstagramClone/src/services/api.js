import axios from 'axios';

const api = axios.create({
                //ip da sua máquina
    baseURL: 'http://192.168.1.155:3333'
})

export default api;