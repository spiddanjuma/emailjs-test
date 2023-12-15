import React from 'react'
import Contact from './Contact.jsx'
import Header from './component/header.jsx'
import Name from './component/name.jsx'
import Email from './component/Email.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Contact/>}></Route>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/name' element={<Name/>}></Route>
      <Route path='/Email' element= {<Email/>}></Route>
    </Routes>
   </Router>
    </>
  )
}

export default App