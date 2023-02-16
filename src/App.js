import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  const [color, setColor] = useState("");
  const [bgcolor, setbgColor] = useState("");


  const set_data = () =>{
    return(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}&color=${color}&bgcolor=${bgcolor}&format=png`);
  }


 
  return (
    <div className="App">
      <h1 id='title'>QR Generator</h1>
      <img src={set_data()} alt="Type somthing"/>
      <div className='input-fields'>

        <div className='input-field'>
          <label>URL Name: </label>
          <input 
          id='data' 
          value={data} 
          onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div className='input-field'>
          <label>Color: </label>
          <input 
          id='color'
          value={color}
          onChange={(event) => setColor(event.target.value)}
          />
        </div>

        <div className='input-field'>
          <label>BgColor: </label>
          <input 
          id='bgcolor'
          value={bgcolor}
          onChange={(event) => setbgColor(event.target.value)}
          />
        </div>

      </div>

      <a id='download-btn' href={set_data()} download="download" target="_blank">
        <button>download
        </button>
        </a>


    </div>
  );
}
export default App;