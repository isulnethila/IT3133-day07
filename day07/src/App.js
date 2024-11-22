import './App.css';
import Childcom from './Childcom';
import {useState} from 'react';
function App() {
  const[childname,setchildname]=useState("Default");
  const receiveName=(name)=>{
    setchildname(name);
  }
  return (
    <div>
      <h2>Hello React I'm Parent</h2>
      <p>parent:My chlid said:{childname}</p>
      <Childcom addName={receiveName}/>
    </div>
   
  );
}

export default App;
