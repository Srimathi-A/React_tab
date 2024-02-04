import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Profile from './Profile';
import User from './User';


const Person = () =>{
  return ( 
     <div>
      <Routes>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/User" element={<User/>}></Route>
      </Routes>
      </div>
   
  );
}

export default Person;