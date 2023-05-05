
import {Button} from 'react-bootstrap'
import { useState } from 'react'
import './App.css'

export const App = ()=> {
  const [changed,setChange]= useState('')
  const [frmdata, setFrmdata] = useState({user:"",
  pass:"",
  email:"",
  tel:""
})
 
  const frmSubmit = ()=>{
    event.preventDefault()
    const frmda = new FormData(event.target)
    const formJson = Object.fromEntries(frmda.entries())
    setFrmdata(formJson) 
    
  }
  function change(e){
    setChange(e.target.value)
    
  }
function k(){
const a = JSON.stringify(frmdata)

}

  return (
   <>
   
   <div className='main-div'>
   <h4>Form validation</h4>

    <form action="" onSubmit={frmSubmit} >
      <input type="text" placeholder='User name' name='user' onChange={(e)=>change(e)} minLength={6} required />
      {changed.length<6 && changed .length!=0  ? <p>username minimum 6 char</p> : null}
      <input type="password" placeholder='Password' name='pass' onChange={(e)=>change(e)} minLength={6} required/>
      {changed.length<8 && changed.length!=0 ? <p>password minimum 8 char</p>:null}
      <input type="email" placeholder='email' name='email' onChange={(e)=>change(e)} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' required/>
      <input type="tel" placeholder='phoneNo' name='tel' pattern='^[7-9][0-9]{9}$' required />
      <Button variant="primary" type='submit' >
    Button as link
  </Button>
    </form>
  {JSON.stringify(frmdata)}
   </div>
 
    </>
  )
}


