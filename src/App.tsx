import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Sidenav from "./components/Sidenav/Sidenav";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Components from "./pages/Components/Components";
// import Members from "./pages/Members/Members";
import Stores from "./pages/Stores/Stores";
import Users from "./pages/Users/Users";
import * as BaseLayout from "./layouts/dashboard/Layout";

const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <div>
                <BaseLayout/>
            </div>
            {/*    <div>*/}
            {/*        <Routes>*/}
            {/*            <Route path='/' element={<Dashboard />}/>*/}
            {/*            <Route path='/users' element={<Users />} />*/}
            {/*            <Route path='/stores' element={<Stores />}/>*/}
            {/*            <Route path='/components' element={<Components />}/>*/}
            {/*        </Routes>*/}
            {/*    </div>*/}
            {/*</BaseLayout>*/}
{/*
          <div className='container-fluid'>
              <div className='row App'>
                  <div className='left-side col-2'>
                      <Sidenav />
                  </div>
                  <div className='right-side col'>
                      <Navbar />
                      <div className='main-content'>
                      </div>

                  </div>
              </div>
          </div>
*/}
        </BrowserRouter>
    );
}

export default App;
