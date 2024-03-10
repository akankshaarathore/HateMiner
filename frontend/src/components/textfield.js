import { useState, setMessage } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './textfield.css'
import WriteMessage from './WriteMessage.js'
import Profile from '../pages/Profiles.js'

const InputField = () => {
  const [name, setName] = useState("")
  const[val1, setVal1] =  useState("Type your Message below and submit!")
  const[val2, setVal2] =  useState("The bot will warn you if your message is misogynistic or toxic!")
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    const data = {
        inputs: [
          e.value,
        ]
      }
    document.getElementById('bubble1').innerHTML=name;
    e.preventDefault();
    console.log(e);
    
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        input_message: name
      });
      console.log(response.data)
      setMessage(response.data)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <div>
        <p className='pretty'> Hate Navigate </p>
      </div>
      <div>
        <p className='instruct'> Send a message for misogyny and toxicity detection! </p>
      </div>
      <div className='outer-box'>
        <div className='line-1'>
            <p className="name1">Your user</p>
            <img className='profile1' src={Profile}/>
            <p id="bubble1" className='user-message'>{val1}</p> 
        </div>

        <div>
          <p className="name2">HateMiner</p>
          <img className='profile2' src={Profile}/>
          <p id="bubble2" className='bot-message'>{val2}</p>
        </div>
        {message && (
        <div>
          <p className="name2">HateMiner</p>
          <img className='profile2' src={Profile}/>
          <p id="bubble2" className='bot-message'>{message}</p>
        </div>
      )}
      </div>
      

      <div className='bottom-half'>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              placeholder="Message Bot"
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
