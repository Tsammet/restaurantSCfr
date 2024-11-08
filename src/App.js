import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './start';
import ShowCategories from './Category/showCategories';

function App() {
  return (
    <Router>
        <div>
            {}
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/allCategories" element={<ShowCategories />} /> {}
            </Routes>
        </div>
    </Router>
  );
}

export default App;
