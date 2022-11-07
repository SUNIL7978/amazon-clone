import './App.css';
import Homescreen from './components/HomeScreen/Homescreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductSreen/ProductDetail';

function App() {

return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route exact path="/product/:slug" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}




export default App;
