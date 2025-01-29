import ProductCard from "../components/TopProducts/ProdactCard";

import { useGetAllProductsQuery } from "../redux/features/products/productsApi";

const Product = () => {
    const {data}= useGetAllProductsQuery(undefined);
  // console.log(isLoading,isFetching);
    console.log("main data",data?.data);
    const products = data?.data
    return (
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products?.map((product) => (
          < ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>

    

    )
  }
  
  export default Product;