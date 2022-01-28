//impot do hook para receber a consulta
import {useState} from "react";

//import icone de pesquisa da lib instalada
import {FiSearch} from 'react-icons/fi'

//import do css style
import './style.css';


function App() {
  //chamando hook state
  const [input, setInput] = useState("");

  //function active button
  function hundleSearch(){
    alert("foi digitado " + input);
  }

  return (
    <div className="container">
      <h1 className="title">Consultar CEP</h1>
      
      <div className="containerInput">
        <input type="text" placeholder="Digite um CEP..." 
        value={input} onChange={(event) => setInput(event.target.value)}/>

        <button className="btnsearch" onClick={hundleSearch} ><FiSearch size={25} color="#FFF"/></button>

      </div>
      <section className='main'>
        <h2>CEP:  72420290</h2>
        
        <span>Rua</span>
        <span>Complemento</span>
        <span>Bairro</span>
        <span>Cidade - Estado</span>

      </section>
      
    </div>
  );
}

export default App;
