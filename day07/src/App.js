import './App.css';
import Childcom from './Childcom';
import {useState} from 'react';
function App() {
  const[childname,setchildname]=useState("Default");
  return (
    <div>
      <h2>Hello React I'm Parent</h2>
      <Childcom/>
      <p>parent:My chlid said:{childname}</p>
    </div>
   
  );
}

export default App;
