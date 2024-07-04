import React from 'react'

const Form = ({checkLogin,isLoggedIn}) => {
    let input1,input2;
    const handleChange=(e)=>{input1=e.target.value;
        //console.log('hid',e.target.value,input1)
    }
    const handlePassword=(e)=>{input2=e.target.value;}
    const handleSubmit=(e)=>{
e.preventDefault();
console.log(input1,input2);
if (input1.length>0 && input2.length>0) {
    checkLogin(true);   
   // document.getElementById('form').innerHTML="You are Logged in!";
}

    }
  return (
    <div id='form'>
      {!isLoggedIn &&  <form>
        <label>Username:</label>
        <input type='text' onChange={handleChange} value={input1} required/><br/>
        <label>Password:</label>
        <input type='password'onChange={handlePassword} value={input2} required/><br/>
        <button type='submit' onClick={handleSubmit}>Login</button>
        </form> } 
        {
       isLoggedIn && <p>You are logged in!</p>
      }
    </div>
  )
}

export default Form