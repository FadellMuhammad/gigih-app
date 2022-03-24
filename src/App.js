import './App.css';
import CardComp from './component/CardComp';
import data from './Data';

function App() {

  const ImageUrl = data.album.images[1].url;
  const Title = data.name;
  const Artist = data.album.artists[0].name;

  return (
    <div className="App">
      <CardComp ImageUrl={ImageUrl} Title={Title} Artist={Artist}  />
    </div>
  );
}

export default App;
