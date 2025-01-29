import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/features/products/productsApi";

// const ProductDetails = () => {
//     const { productId } = useParams<{ productId: string }>();
   
    
//     const { data, error, isLoading } = useGetProductByIdQuery(productId as string);
//    console.log(useGetProductByIdQuery(productId as string));
//    console.log(data);
//  const product = data?.data
//     if (isLoading) return <div className="text-center text-lg">Loading...</div>;
//     if (error) return <div className="text-center text-red-500">Error loading product.</div>;
  
//     return (
//       <div className="">
//         <div className="shadow-lg rounded-2xl p-6">
//           <div>
//             <h1 className="text-2xl font-bold mb-4">{product?.name}</h1>
//             <img src={product?.bikeImg} alt={product?.name} className="w-[600px]  h-64 object-cover rounded-lg mb-4" />
//             <p className="text-gray-700 mb-2">{product?.description}</p>
//             <p className="text-xl font-semibold text-blue-600">${product?.price}</p>
//             <Link to='' className="mt-4">Add to Cart</Link>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default ProductDetails;

//   import { useState } from "react";

const ProductDetails= () => {
    const { productId } = useParams<{ productId: string }>();
        const { data, error, isLoading } = useGetProductByIdQuery(productId as string);
   console.log(useGetProductByIdQuery(productId as string));
   console.log(data);
 const product = data?.data
    if (isLoading) return <div className="text-center text-lg">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error loading product.</div>;
   
//   const [mainImage, setMainImage] = useState(
//     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
//   );

//   const thumbnails = [
//     "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
//     "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
//     "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
//   ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={product?.bikeImg}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            {/* <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {thumbnails.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                //   onClick={() => setMainImage(src)}
                />
              ))}
            </div> */}
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{product?.name}</h2>
            <p className="text-gray-600 mb-4">Model:{product?.model}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product?.price}</span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>
            <p className="text-gray-700 mb-6">
              {product?.description}
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
              <input type="number" min="1" defaultValue="1" className="w-12 text-center rounded-md border-gray-300 shadow-sm" />
            </div>
            <div className="flex space-x-4 mb-6">
              <Link to='' className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Add to Cart
              </Link>
              <Link to='' className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
                Wishlist
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
