import './App.css';
import Navbar from './components/Navbar';
import Imgsection from './components/Imgsection';
import Description from './components/Description';
import SlidingCard from './components/SlidingCard';
import Location from './components/Location';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // duration in ms, animate once
  }, []);
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
