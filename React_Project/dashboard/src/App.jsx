import React from 'react';
import Navbar from "./component/Navbar";
import Sidebar from './component/Sidebar';
import AddUser from './pages/users/AddUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter >
      <div style={{display:"flex"}}>
        <div style={{width:""}}>
          <Sidebar/>
        </div>
        <div style={{width:"100%"}}>
        <Navbar/>
        </div>
        <Routes>
         

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;