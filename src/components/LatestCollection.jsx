// filepath: c:\Users\User\OneDrive\Desktop\ecommerce-app\frontend\src\components\LatestCollection.jsx
import React, { useContext, useState, useEffect } from 'react';
// import { ShopContext } from '../context/ShopContext';
import Title from './Title';
// import ProductsItem from './ProductsItem';

const LatestCollection = () => {
  // const { products } = useContext(ShopContext);
  // const [latestProducts, setLatestProducts] = useState([]);

  // useEffect(() => {
  //   // console.log('Products:', products); // Add this line to check the products array
  //   setLatestProducts(products.slice(0, 10));
  // }, [products]);

 return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'> 
      <div className='text-center py-8 text-3xl'>
        <Title text1={'ABOUT'} text2={'US'} />
        {/* About Section Box */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
            alt="About Erlendis Solution"
            className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
          />
          {/* Description Box */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-2/3 text-xs sm:text-sm md:text-base text-gray-600 text-left">
            About Erlendis Solution<br />
            Erlendis Solutions India is an integrated er providing call center customer services by combining best available technology, processes and people. It is an International Call Center located at Kolkata, India. Erlendis Solutions India mission is to provide high-end call center customer services through our Contact Center. Our Inbound and Outbound Call Center in India are in a unique position to provide our clients with the best e-CRM call center services round the globe by utilizing one to one experience across every point of the customer relationship lifecycle. Our Inbound Call Center Services include direct marketing, telesales, customer services, surveys, etc. Our call Centers in India provide solutions to our International Clients wherever they have their customers. Our Call Centers.
                        <br />
                         <a
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 inline-block"
              >
                Read More
              </a>
          </div>
        </div>
      </div>
      {/* Rendering products */}
      {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item, index) => (
          <ProductsItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div> */}
    </div>
  );
};

export default LatestCollection;