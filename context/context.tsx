  "use client"
import { URLLOCAL } from "@/service/request";
import axios from "axios";
 import { createContext, useEffect, useState } from "react";

 export const Context = createContext<any>(null)
 export const BasketContext = ({children}:any) => {
     const token = window.localStorage.getItem("token")
    const [basketArr, setBasketArr] = useState<any>([])
    const [refresh , setRefresh]= useState<boolean>(false)
    useEffect(() => {
      if(token){
        axios.get(`${URLLOCAL}/basket`, {
          params: {
            page : 1,
            limit : 100
          },
          headers: {
            "Authorization" : "Bearer " + token
          }
        }).then(res => 
          setBasketArr(res.data.ProductId)
         )
      }
    }, [refresh]) 
     return (
         <Context.Provider value={{basketArr, setBasketArr, setRefresh, refresh}}>
             {children}
         </Context.Provider>
     )
 }