
import './App.css';
import React from 'react';
import Dashboard from './Component/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbr';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      <div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>


    </>

  );
}

export default App;
