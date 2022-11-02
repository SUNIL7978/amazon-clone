import React from 'react'
import Product from './Product';

const ProductFeed = (props) => {

  const{products} = props;

  console.log(products);

  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 xl:-mt-52 mx-auto'>
        {
          products.slice(0,4).map((currElem) =>(
            <Product
               key= {currElem.id}
                {...currElem}
            />
          ))
        }
        
        <img src="/img/Bg-2.jpg" alt=""  className="md:col-span-full w-full h-80"/>

        <div className="md:col-span-2">
        {
          products.slice(4,5).map((currElem) =>(
            <Product
               key= {currElem.id}
                {...currElem}
            />
          ))
        }
        </div>

        {
          products.slice(5,products.length).map((currElem) =>(
            <Product
               key= {currElem.id}
                {...currElem}
            />
          ))
        }
    </div>
  )
}

export default ProductFeed
