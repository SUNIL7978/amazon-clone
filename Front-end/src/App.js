import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import ProductFeed from './Components/ProductFeed';
import axios from 'axios'
import { useEffect, useState } from 'react';



function App() {

  const [getData,setGetData] = useState('');

  const API="https://fakestoreapi.com/";

  useEffect(() =>{
    getProducts();
      },[])

  const getProducts = () =>{
      axios.get(`${API}products`).then((res)=>{
          const allDatas = res.data.getData;
          setGetData(allDatas);
        })
        .catch(error => console.error(`Error${error}`))
  }

  

  

  return (
    <div className="bg-gray-100">

      {/* Header Part */}

      <Header />

      <main className='max-w-screen-2xl mx-auto'>

        <Banner />
        <ProductFeed products={getData}/>

      </main>
    </div>
  );
}




export default App;
