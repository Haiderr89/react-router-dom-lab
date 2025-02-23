// src/App.jsx
import { useState } from 'react';
import MailboxList from './components/MailboxList';
import Navbar from './components/NavBar';
// import './App.css'
import { Routes, Route } from 'react-router-dom';

import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    formData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, formData])
  }

  return (
    <>
    <Navbar/>
    <h1>Mailbox List</h1>
    <Routes>
    <Route path={'/'} element= {<main><h2>Post Office</h2></main>} />
    <Route path={'/mailboxes'} element= {<MailboxList mailboxes={mailboxes}/>} />
    <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
    <Route path={'/new-mailbox'} element= {<MailboxForm addBox={addBox} />} />
    <Route path={'*'} element={404}/>
    </Routes>
    </>
  )
};

export default App;