import './App.css';
import TrackComp from './component/TrackComp';
// import CardComp from './component/CardComp';
// import data from './data/Data';

function App() {

  // const ImageUrl = data.album.images[1].url;
  // const Title = data.name;
  // const Artist = data.album.artists[0].name;

  return (
    <div className="App">
      {/* <CardComp ImageUrl={ImageUrl} Title={Title} Artist={Artist}  /> */}
      {/* {TrackComp} */}
      <table>
        <tbody>
          <TrackComp />
        </tbody>
      </table>
    </div>
  );
}

export default App;
