import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homescreen from './components/HomeScreen/Homescreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductSreen/ProductDetail';
import ShoppingCart from './components/CartScreen/ShoppingCart';
import SignInPage from './components/SigninScreen/SignInPage';
import ShippingScreenAddress from './components/ShippingScreen/ShippingScreenAddress';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './components/SigninScreen/SignUpPage';
import PaymentMethodScreen from './components/PaymentScreen/PaymentMethodScreen';
import PlaceOrderScreen from './components/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './components/OrderScreen/OrderScreen';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <div>
        <Routes>
          <Route exact path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/shipping" element={<ShippingScreenAddress />} />
          <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
          <Route path="/order/:id" element={<OrderScreen />}></Route>
          <Route path="/payment" element={<PaymentMethodScreen/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/" element={<Homescreen />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}




export default App;
