import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


function Home() {
  return <h1>Home Page</h1>;
}


function Books() {
  return <h1>Books Page</h1>;
}

function Work(){
  return <h2>Work page</h2>
}

function Yahoo() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/book">Books</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Books />} />
          <Route path="/work" element={<Work/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Yahoo;
