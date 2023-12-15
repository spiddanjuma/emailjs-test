import React from 'react'
import Header from './component/header.jsx'
import Name from './component/name.jsx'
function Contact() {
  return (
  <>

<form class="container p-4 row g-3 mx-auto bg-info" style={{width:'18rem', marginTop:'8%'}}>
<Header/>
   
    <div class="col-12">
      <input placeholder='email address' type="email" class="form-control" id="inputEmail"/>
    </div>
    <div class="col-12">
  
    <textarea placeholder='message us...' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
   
    <div class="col-12 mx-auto">
      <button type="submit" class="btn col-6 btn-primary">Send</button>
    </div>
  </form>
  </>
  )
}

export default Contact