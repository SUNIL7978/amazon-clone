import './App.css';
import Homescreen from './components/HomeScreen/Homescreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductSreen/ProductDetail';
import ShoppingCart from './components/CartScreen/ShoppingCart';
import SignInPage from './components/SigninScreen/SignInPage';

function App() {

return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route exact path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}




export default App;
