import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import ShopContextProvider from './context/shop-context';


function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Shop/>} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
        </Router>
        </ShopContextProvider>
      </div>
    
  );
}

export default App;
