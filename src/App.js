import './App.css';

function App() {

  function Set_values(segment){
    let API_KEY = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${segment}`;
    console.log(segment);
    return(
      API_KEY
    );
  }


  return (
    <div className="App">
      <h1>QR Generator</h1>
      <img src={Set_values()}/>
    </div>
  );
}

export default App;
