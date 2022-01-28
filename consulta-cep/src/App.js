//inportar icone de pesquisa da lib instalada
import {FiSearch} from 'react-icons/fi'

//inporte do css style
import './style.css'; 

function App() {
  return (
    <div className="container">
      <h1 className="title">Consultar CEP</h1>
      
      <div className="containerInput">
        <input type="text" placeholder="Digite um CEP"/>

        <button className="btnsearch" ><FiSearch size={25} color="#FFF"/></button>

      </div>
      <section className='main'>
        <h2>CEP:  72420290</h2>
        
        <span>Rua</span>
        <span>Complemento</span>
        <span>Bairro</span>
        <span>cidade</span>

      </section>
      
    </div>
  );
}

export default App;
