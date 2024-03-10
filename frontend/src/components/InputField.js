import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './inputfield.css'
import WriteMessage from './WriteMessage'
import Profile from '../res/profile.png'

const InputField = () => {
  const [name, setName] = useState("")
  const[val1, setVal1] =  useState("Type your Message below and submit...")
  const[val2, setVal2] =  useState("The bot will warn you if your message is hateful towards women")

  const handleSubmit = async (e) => {
    const data = {
        inputs: [
          e.value,
        ]
      }
    document.getElementById('bubble1').innerHTML=name;
    e.preventDefault();
    console.log(e);
    const response = await axios.post("http://127.0.0.1:5000/predict", {
      msg: name
    })
    console.log(response);
  if(response.data === "myso")
  {
    setVal2("Warning! This comment is potentially misogynistic. Please be more mindful of your language.");
    document.getElementById('bubble2').style.backgroundColor = "#A41919";
  }
  else
  {
    setVal2("This comment has not been detected as misogynistic or toxic. Well done!");
    document.getElementById('bubble2').style.backgroundColor = "#3BAB7F";
  }
}


  return (
    <div>
      <div>
        <p className='pretty'> Navigate Hate </p>
      </div>
      <div>
        <p className='instruct'> Send a message for misogyny detection! </p>
      </div>
      <div className='outer-box'>
        <div className='line-1'>
            <p className="name1">user</p>
            <img className='profile1' src={Profile}/>
            <p id="bubble1" className='user-message'>{val1}</p> 
        </div>

        <div>
          <p className="name2">HateMiner</p>
          <img className='profile2' src={Profile}/>
          <p id="bubble2" className='bot-message'>{val2}</p>
        </div>
      </div>
      

      <div className='bottom-half'>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              placeholder="Message HateMiner"
              className='submitter'
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="➤" className='submit'/>
        </form>
      </div>
    </div>
  )
}

export default InputField
