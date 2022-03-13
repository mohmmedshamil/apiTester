import React from 'react'
import Apidesign from '../Apidesign/Apidesign'
import Header from '../header/Header'
import './mainpage.css'
function Mainpage() {
  
  return (
    <div className='mainpage'>
        <Header/>
        <div className="contents">
            <p>Welcome to API Tester.<br/>
             API Tester makes it easy to invoke,<br/> discover and test HTTP and REST APIs. <br/>
            </p>
        </div>
        <Apidesign/>
    </div>
  )
}

export default Mainpage