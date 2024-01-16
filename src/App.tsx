import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Sidenav from "./components/Sidenav/Sidenav";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Members from "./pages/Members/Members";
import Stores from "./pages/Stores/Stores";
import Users from "./pages/Users/Users";

function App() {
  return (
      <BrowserRouter>
          <div className='container-fluid'>
              <div className='row App'>
                  <div className='left-side col-2'>
                      <Sidenav />
                  </div>
                  <div className='right-side col'>
                      <Navbar />
                      <div className='main-content'>
                          <Routes>
                              <Route path='/' element={<Dashboard />}/>
                              <Route path='/users' element={<Users />} />
                              <Route path='/stores' element={<Stores />}/>
                          </Routes>
                      </div>

                  </div>
              </div>
          </div>
      </BrowserRouter>

  );
}

export default App;
