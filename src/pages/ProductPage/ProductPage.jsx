// 'use client'

// import Link from 'next/link';
// import Loading from '@/components/ui/Shared/Loading/Loading';
// import { productdata } from '../../data/productData.json';
// import { useEffect, useState } from 'react';


// const ProductsPage = () => {

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [activeFilter, setActiveFilter] = useState('all');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await productdata();
//         //@ts-ignore
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <Loading />
//   }


//   return (
//     <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our Premium <span className="text-primary">Auto Parts</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             High-performance components engineered for reliability and durability. 
//             Upgrade your vehicle with our cutting-edge automotive solutions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((product, index) => (
//             <div 
//             //@ts-ignore
//               key={product._id}
//               className={`relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ${hoveredCard === index ? 'transform scale-[1.02] z-10 border-primary border-2' : 'border border-gray-200'}`}
//               //@ts-ignore
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="h-full flex flex-col bg-white">
//                 {/* Product image */}
//                 <div className="h-48 overflow-hidden bg-gray-100">
//                   <img 
//                     src={product?.
//                       //@ts-ignore
//                       image_url} 
//                     alt={
//                       //@ts-ignore
//                       product?.alt} 
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                   />
//                 </div>
                
//                 {/* Product info */}
//                 <div className="p-6 flex-1 flex flex-col">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{
//                   //@ts-ignore
//                   product?.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                     {
//                     //@ts-ignore
//                     product?.description
//                     }
//                   </p>
                  
//                   {/* Interactive elements */}
//                   <div className="mt-auto pt-4 border-t border-gray-100">
                    
//                     <Link href={
//                       //@ts-ignore
//                       `/products/${product?.name}`}>
//                     <button className="w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
//                       View Details
//                     </button>
//                     </Link>
//                   </div>
//                 </div>
                
//                 {/* Premium badge */}
//                 <div className="absolute top-4 right-4">
//                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
//                     Premium
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;



'use client'

import { useState, useEffect } from 'react';
import ProductCard from '@/components/view/Card/ProductCard';
import productData from '@/data/productData';
import Loading from '@/components/ui/shared/Loading/Loading';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productdata();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-primary">Auto Parts</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-performance components engineered for reliability and durability. 
            Upgrade your vehicle with our cutting-edge automotive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productData.map((product, index) => (
            <ProductCard
              key={product._id}
              product={product}
              isHovered={hoveredCard === index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;