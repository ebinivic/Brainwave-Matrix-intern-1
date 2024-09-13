import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';


function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Shop/>} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
        </Router>
      </div>
    
  );
}

export default App;
