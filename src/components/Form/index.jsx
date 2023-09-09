import "./index.css"
import { useState } from "react"


const Form = () => {
    // const [newName, setNewName] = useState('');

    // const handleChange = (e)=>{
    //     e.preventDefault();
    //     setNewName(e.target.value);
    // }
    return (<>
  <form>
    <label>Username
        <input {/*</label>*value = {newName} onChange = {(e)=> handleChange(e)} */}type = "text"></input>
  {console.log(newName)}
    </label>
    <label>Email
        <input type = "text"></input>
        </label>

    <label>password
        <input type = "password"></input>
        </label>
        <button>Submit</button>
  </form>


  </>  
    )
}

export default Form