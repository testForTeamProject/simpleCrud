import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div>
        <label>Movie Name : </label>
        <input type="text" name="moviename"/>
      </div>
      <div>
        <label>Movie Review : </label>
        <input type="text" name="review"/>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default App;
