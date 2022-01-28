//impot do hook para receber a consulta
import {useState} from "react";

//import icone de pesquisa da lib instalada
import {FiSearch} from 'react-icons/fi'

//import do css style
import './style.css';

//import da API
import api from './services/api';


function App() {
  //chamando hook state
  const [input, setInput] = useState('');

  //para amarzenar o retorno da API
  //vai receber um objeto
  const [recebeCep, setRecebeCep] = useState({});

  //button do activation for request to API
  async function hundleSearch(){
    
    //verification input filled
    if (input === '') {
      alert("Digite algum CEP para ser consultado");
      return;
    }
  
    //Request for API
    try{
      const response = await api.get(`${input}/json`);
      //mostra o retorno do cep consultado
      setRecebeCep(response.data)
      setInput("");//para limpar o campo

    }catch{
      alert("Erro inesperado");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Consultar CEP</h1>
      
      <div className="containerInput">
        <input type="text" placeholder="Digite um CEP..." 
        value={input} onChange={(event) => setInput(event.target.value)}/>

        <button className="btnsearch" onClick={hundleSearch} ><FiSearch size={25} color="#FFF"/></button>

      </div>
       
      {Object.keys(recebeCep).length > 0 && (
        <section className='main'>
        <h2>CEP: {recebeCep.cep}</h2>
        
        <span>{recebeCep.logradouro}</span>
        <span>Complemento: {recebeCep.complemento}</span>
        <span>Bairro: {recebeCep.bairro}</span>
        <span>{recebeCep.localidade} - {recebeCep.uf}</span>

      </section>
      )}

    </div>
  );
}

export default App;
