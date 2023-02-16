import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  const [color, setColor] = useState("");

  const set_data = () =>{
    console.log(data);
    console.log(color);
    return(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}&color=${color}`);
  }


 
  return (
    <div className="App">
      <h1>QR Generator</h1>
      <img src={set_data()}/>
      <div className='input-fields'>

        <div className='data-entry'>
          <input 
          id='data'
          placeholder='url name' 
          value={data} 
          onChange={(e) => setData(e.target.value)}/>
          <button onClick={() => set_data(data)}>click me</button>
        </div>

        <div className='color-entry'>
          <input 
          id='color'
          placeholder='color' 
          value={color}
          onChange={(e) => setColor(e.target.value)}/>
          <button onClick={() => set_data(color)}>click me</button>
        </div>
      </div>
    </div>
  );
}
export default App;