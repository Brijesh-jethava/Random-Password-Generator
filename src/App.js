import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {SC,LC,UC,NC} from "./Data/PassChar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  let [uppercase , setUppercase]  =useState(false)
  let [lowercase , setLowercase]  =useState(false)
  let [number , setNumber]        =useState(false)
  let [specialchar,setSpecialchar]  =useState(false)

  let[passwordlen , setPasswordLen] = useState(10)
  let[fpass, setFpass] = useState('')

  let createPassword = ()=>
  {
    let charSet = ' '
    let finalPass= ' '
    if(uppercase || lowercase || number || specialchar)
    {
      if(uppercase)
        charSet+=UC;
      if(lowercase)
        charSet+=LC;
      if(number)
        charSet+=NC;
      if(specialchar)
        charSet+=SC;

      for(let i=0;i<passwordlen;i++)
      {
        
        finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))
      }

      setFpass(finalPass)
    }
    else
    {
      toast.error("Please select atlist one chechbox")
     
    }
  }
  
  let copyPass = ()=>
  {
    navigator.clipboard.writeText(fpass)
    toast.success("Password copied")
  }

  return (
   <>

   
   <div className="passwordBox">
      <h2>Password Generator</h2>
       
       
    <ToastContainer/>
      <div className="passwordBoxin">
        <input type="text" readOnly value={fpass} placeholder='Password' className='inputBox'/>
        <button onClick={copyPass} className='copy'>Copy</button>
      </div>

      <div className="passLength">
         <label htmlFor='passLength'>Password length</label>
         <input type="number" id='passLength' max={20} min={5} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)}/>
      </div>

      <div className="passLength">
         <label htmlFor='Uppercase'>Include Uppercase letters</label>
         <input type="checkbox" id='Uppercase' checked={uppercase} onChange={()=>setUppercase(!uppercase)} className='check'/>
      </div>

      <div className="passLength">
         <label htmlFor='lowercase'>Include lowercase letters</label>
         <input type="checkbox" id='lowercase' checked={lowercase} onChange={()=>setLowercase(!lowercase)} className='check'/>
      </div>

      <div className="passLength">
         <label htmlFor='Numbers'>Include Numbers</label>
         <input type="checkbox" id='Numbers' checked={number} onChange={()=>setNumber(!number)} className='check'/>
      </div>

      <div className="passLength">
         <label htmlFor='Symbols'>Include Symbols</label>
         <input type="checkbox" id='Symbols' checked={specialchar} onChange={()=>setSpecialchar(!specialchar)} className='check'/>
      </div>

      <button className='btn' onClick={createPassword}>Generate password</button>
   </div>
   </>
  );
}

export default App;
