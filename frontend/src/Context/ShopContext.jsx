import React, { createContext, useState, useEffect } from "react";
// import all_product from '../Components/Assets/all_product';



export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 1; index <= 300; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props)=>{
    const [all_product, setAll_Products] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    useEffect(()=>{ 
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Products(data))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[]);

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
              method:'POST',
              headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
              },
              body:JSON.stringify({"itemId":itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
       
        }
      
    }
    const cartValueToZero = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:0}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removecompletelyfromcart',{
              method:'POST',
              headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
              },
              body:JSON.stringify({"itemId":itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
        
    }
    const  removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
              method:'POST',
              headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
              },
              body:JSON.stringify({"itemId":itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id ===Number(item))
                totalAmount += itemInfo.new_price*cartItems[item];
            }
            
        }
        return totalAmount
    }
    const cartCount = () => {
        let cartTotalCount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                cartTotalCount += cartItems[item];
            }
        }
        return cartTotalCount;
    }
    useEffect(() => {
        console.log(cartItems)
    }, [cartItems]);
    const contextValue = {all_product, cartItems, addToCart, removeFromCart, cartValueToZero, getTotalCartAmount, cartCount};

    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;