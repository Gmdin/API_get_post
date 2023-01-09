
import { useState } from 'react';
import './App.css';
import DemoOutput from './components/DemoOutput';
function App() {
  const [data,setData]=useState(false);

  const hideData=()=>{
    setData((prevData)=>!prevData);
  }
  return (
    <div className="App">
          <h1>Hi There!</h1>
        {/* {data && <p>I am a paragraph</p>} */}
        <DemoOutput show={data}/>
          <button onClick={hideData}>Button</button>
    </div>
  );
}

export default App;
