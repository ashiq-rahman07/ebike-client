import { useGetAllProductsQuery } from "../redux/features/products/productsApi";

const Product = () => {
    const {data}= useGetAllProductsQuery(undefined);
  // console.log(isLoading,isFetching);
    console.log("main data",data?.data);
    return (
    <h3>This is Product Page</h3>

    

    )
  }
  
  export default Product;