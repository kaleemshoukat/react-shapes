import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Index from './pages/index';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
            <Route exact path="/" element={ <Index /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
