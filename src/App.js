
import './App.css';
import About from './Components/About/About';
import Animated from './Components/Animated/Animated';
import Blogs from './Components/Blogs/Blogs';
import Clients from './Components/Clients/Clients';
import Community from './Components/Community/Community';
import Features from './Components/Features/Features';
import Inp from './Components/Inp/Inp';
import Join_TWTZ from './Components/Join_TWTZ/Join_TWTZ';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Shareholder from './Components/Shareholder/Shareholder';
import Top_Navbar from './Components/Top_Navbar/Top_Navbar';

function App() {
  return (
    <div className="App">
     <Top_Navbar/>
     <Navbar/>
     <Landing/>
     <Clients/>
     <Features/>
     <Inp/>
     <About/>
     <Join_TWTZ/>
     <Shareholder/>
     <Blogs/>
     <Community/>
     <Animated/>
    </div>
  );
}

export default App;
