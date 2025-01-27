import {  TRBike } from "../../../types/product.type";
import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllProducts:builder.query<TRBike, string|undefined>({
            query:()=>(
                {
                    url:'/product',
                    method:'GET'
    
                }
            )
        })
    })
})


export const {useGetAllProductsQuery}= productsApi;