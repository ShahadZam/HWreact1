import './App.css';
import Navbar from './Navbar/Navbar'
import { useRef, useState } from 'react';

function App() { 

  
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [result, setresult] = useState('');

  const appName = 'Calc';


  const navItems = [
    {
      name: 'home',
      url: '/',
    },
    {
      name: 'about',
      url: '/about',
    },
  
    {
      name: 'contact',
      url: '/contact',
    },
  ];

  

  //console.log('Are you render?')
   return (
    <div className="App">

      <Navbar navItems={navItems} appName={appName} />

      <div>
    
    <div className="number-input">
      <h1>Calculator</h1>
        <input type="text" className=''  defaultValue="" onChange={(e) => setnum1(e.target.value)} placeholder='Enter first number' />
        <input type="text" defaultValue="" onChange={(e) => setnum2(e.target.value)} placeholder='Enter second number' />
      </div>
        <button  onClick={() => setresult(parseInt(num1) + parseInt(num2))} >+</button>
        <button  onClick={() => setresult(num1 - num2)} >-</button>
        <button  onClick={() => setresult(num1 / num2)} >/</button>
        <button  onClick={() => setresult(num1 * num2)} >*</button>
     
        <div className="num">
        <h6>{result}</h6>
    </div>
    </div>
    </div>
  );
}

export default App;
