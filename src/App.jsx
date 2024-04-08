import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import NavBar from './NavBar';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {

  return (
    <div>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/sardines' element={<Sardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
