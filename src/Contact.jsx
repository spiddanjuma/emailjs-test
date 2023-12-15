import React from 'react'
import Header from './component/header.jsx'
import Name from './component/name.jsx'
import Email from './component/Email.jsx'
import Message from './component/message.jsx'
import Send from './component/Send.jsx'
function Contact() {
  return (
  <>

<form class="container p-4 row g-3 mx-auto bg-info" style={{width:'18rem', marginTop:'8%'}}>
<Header/>
<Name />
<Email/>
<Message/>
<Send />
   

   
   
  </form>
  </>
  )
}

export default Contact