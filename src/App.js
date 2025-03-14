import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './Search';

function App() {
  const [state, setState] = useState({
  search: "",
  results: []
  });

  const handleInput = (event) => {
    let search = event.target.value;
    setState(prevState => {
      return {...prevState, search: search}
    })
  }
  const SearchResult = (event) => {
    if (event.key === 'Enter') {
      alert("enter");
    }
  }
  return (
    <div className="w-100 main-wrapper d-flex flex-column justify-content-center align-items-center">
      <header className="w-100 main-wrapper my-5">
        <h2>Find Your Movie</h2>
        <Search handleInput={handleInput} />
      </header>
      
    </div>
  )
}

export default App;
