import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './ContactList';
import ContactEdit from './ContactEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/contacts' exact={true} element={<ContactList/>}/>
        <Route path='/contacts/:id' element={<ContactEdit/>}/>
      </Routes>
    </Router>
  )
}

export default App;
