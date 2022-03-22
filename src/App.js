import './App.css';
import data from './Data';

function App() {
  return (
    <div className="App">
      <img src={data.album.images[1].url} alt="" />
      <p>Song title : {data.name}</p>
      <p>Song Artists : {data.artists[0].name}</p>
      <button type='submit'>Select</button>
    </div>
  );
}

export default App;
