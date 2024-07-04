
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  const [isLoggedIn,setisLoggedIn]=useState('false');
  return (
    <div>
      <h1>Parent Component</h1>
      <Form checkLogin={setisLoggedIn}/>
        {/* Do not remove the main div */
        //hello
        }
    </div>
  )
}

export default App
