import { Link } from "react-router-dom";
import { TBike } from "../../types/product.type";


type TProductCardProps={
    product: TBike;
  }
  

const ProductCard:React.FC<TProductCardProps>  = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img
      src={product.bikeImg} // Replace with your image URL
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product.price}</span>
        <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
        View Details
        </Link>
      </div>
    </div>
  </div>
  )
}

export default  ProductCard;