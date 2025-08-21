import Link from 'next/link';

const ProductCard = ({ 
  product, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ${
        isHovered ? 'transform scale-[1.02] z-10 border-primary border-2' : 'border border-gray-200'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-full flex flex-col bg-white">
        {/* Product image */}
        <div className="h-48 overflow-hidden bg-gray-100">
          <img 
            src={product.image_url} 
            alt={product.alt} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Product info */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>
          
          {/* Interactive elements */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <Link href={`/products/${product.name}`}>
              <button className="w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                View Details
              </button>
            </Link>
          </div>
        </div>
        
        {/* Premium badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
            Premium
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;