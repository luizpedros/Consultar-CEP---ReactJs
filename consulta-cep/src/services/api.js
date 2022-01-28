//import da bliblioteca que tralha com requisições (é preciso instalar ela antes no projeto)
import axios from "axios";

const api = axios.create({
    baseURL: "http://viacep.com.br/ws/" //baseURL é algo que  não vai mudar(http://viacep.com.br/ws/)

})

// exportar arquivo para poder utilizar ele em outro arquivo
export default api;