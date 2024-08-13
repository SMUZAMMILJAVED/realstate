import Navbar from './Components/Navbar';
import ImageCarousel from './Components/ImageCarousel';
// import Materails from './Components/Materails';
import Widgets from './Components/Widgets';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import './index.css';
function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <ImageCarousel/>
     <ImageSlider/>
     {/* <Materails/> */}
     <Widgets/>

    </div>
  );
}

export default App;
