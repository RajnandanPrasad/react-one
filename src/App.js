
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Facility from './Pages/Facility';
import ContactUs from './Pages/ContactUs';
function App() {
  return (
   <div>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='react-one' element={<Home/>}/>
      <Route path='/facility' element={<Facility/>}/>
      <Route path='/contact us' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
      

    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
