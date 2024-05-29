import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/mb.jpg';
import women_banner from './Components/Assets/wb.jpg';
import kid_banner from './Components/Assets/kb.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner = {men_banner} category = "Men"/>}></Route>
        <Route path='/womens' element={<ShopCategory banner = {women_banner} category = "Women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner = {kid_banner} category = "Kid"/>}></Route>
        <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
