
import './App.css';
import { Slider } from "./components/slider";
import  { slides } from "./data/sliderdata.json";

function App() {
  return <div className="App">
      <Slider data ={slides} />
  </div>;
}

export default App;
