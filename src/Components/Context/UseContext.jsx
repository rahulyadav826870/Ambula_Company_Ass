import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Step 1: Create a new contextApi
export const contextApi = createContext();

// Create a ContextProvider component that holds the state and provides it to other components
export const ContaxtProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const [cartProducts,setCartProducts] = useState([]) 
    const [productsData,setProductsData]= useState([])
  // Function to add a new Todo
  const addTodo = (inputText) => {
    // console.log(inputText)
    setTodo([...todo, inputText]);
  };

    // Function to mark a task as completed
  const handleCompleted = (index) => {
    console.log("Click")
    const updatedTodo = [...todo];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    console.log("updatedTodo: ", updatedTodo);
    
    setTodo(updatedTodo);
  };

   // Function to remove a task
  const handleRemove = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  // Calculate the number of completed todo
  const completedTodoCount = todo.filter((todo) => todo.completed).length;


  // Cart Function 
  
// addtocart function for add product into the cart

const addToCartHandler=(product)=>{

    const index = cartProducts.findIndex(item=>item.id===product.id)
    if(index> -1 ){
        const newData = [...cartProducts];
        newData.splice(index,1,{...cartProducts[index],quantity:cartProducts[index].quantity+1})
        setCartProducts(newData)
    }


   else{
    setCartProducts([...cartProducts,{...product,quantity:1}])
   }
}

// increase quantity of the products

const incQuantity =(id)=>{
    const index = cartProducts.findIndex(item=>item.id===id);
    const newData = [...cartProducts];
    newData.splice(index,1,{...cartProducts[index],quantity:cartProducts[index].quantity+1})
    setCartProducts(newData)

}

    // decrease quantity of the products
const decQuantity =(id)=>{
    const index = cartProducts.findIndex(item=>item.id===id);
    const newData = [...cartProducts];
    if(cartProducts[index].quantity>1){
        newData.splice(index,1,{...cartProducts[index],quantity:cartProducts[index].quantity-1})
        setCartProducts(newData)
    }
    else if(cartProducts[index].quantity===1){
        removeFromCart(id)
    }
}

// remove product from the Cart 

const removeFromCart= id => {
    setCartProducts(cartProducts.filter(item=>item.id!==id))
}


// call api for get products data
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then((res)=>setProductsData(res.data))
},[])

// using CartContextProvider for centrailize and access all the data anyever in the component without prop driling.

  return (
    // Provide the context values to the children components
    <contextApi.Provider
      value={{ todo, addTodo, handleCompleted, handleRemove,completedTodoCount,cartProducts,addToCartHandler,productsData ,incQuantity, decQuantity, removeFromCart }}
    >
      {children}
    </contextApi.Provider>
  );
};
