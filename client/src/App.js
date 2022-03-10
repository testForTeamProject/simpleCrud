import React, {useState, useEffect} from "react"
import Axios from 'axios'
import './App.css'

function App() {
  const [movieName, setMovieName] = useState("")
  const [movieReview, setMovieReview] = useState("")
  
  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name: movieName, 
      review: movieReview,
    }).then(() => {
      alert("successful insertion");
    })
  };

  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div className="reviewform">
        <label>Movie Name : </label>
        <input 
          type="text" 
          name="moviename"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
      </div>
      <div className="reviewform">
        <label>Movie Review : </label>
        <input 
          type="text" 
          name="review"
          onChange={(e) => {
            setMovieReview(e.target.value);
          }}
        />
      </div>
      <button onClick={submitReview}>Submit</button>
    </div>
  );
}

export default App;
