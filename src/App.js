import './App.css';
import Navbar from './components/Navbar';
import Imgsection from './components/Imgsection';
import Description from './components/Description';
import SlidingCard from './components/SlidingCard';
import Location from './components/Location';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     
       <Navbar/>
       <Imgsection/>
       <Description/>
       <SlidingCard/>
       <Location/>
       <Footer/>

    </div>
  );
}

export default App;
