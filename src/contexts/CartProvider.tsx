import { useReducer, type ReactNode } from "react";
import CartContext from "./CartContext";
import CartReducer from "../reducers/CartReduce";
import type { CartStateProps } from "../reducers/CartReduce";
import type { ProductOnCartProps } from "../typing/Typing";

interface CartProviderProps {
  children: ReactNode;
}

const INITIAL_STATE: CartStateProps = {
  productsInCart: [],
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  const addProductCart = (products: ProductOnCartProps[]) =>
    dispatch({ type: "ADD", payload: products });

  const removeProductCart = (products: ProductOnCartProps[]) =>
    dispatch({ type: "REMOVE", payload: products });

  const resetCart = () => dispatch({ type: "RESET" });

  return (
    <CartContext.Provider
      value={{
        contextState: state.productsInCart,
        addProductCart,
        removeProductCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

    // const dispatchActionCart = (action: string, product: ProductOnCartProps) => {
    //   switch (action) {
    //     case "ADD":
    //       return dispatch ({type:"ADD", payload: [product]})
    //     case "REMOVE":
    //       return dispatch ({type:"REMOVE", payload: [product]})
    //     case "RESET":
    //       return dispatch ({type:"RESET"})
    //     default:
    //       break;
    //   }
    // }




// import { useState, type ReactNode } from "react";
// import { CartContext } from "./CartContext";
// import type { ProductCardProps } from "../typing/Typing";

// interface CartProviderType {
//     children: ReactNode;
// }

// export const CartProvider = ({ children }: CartProviderType) => {
//     const [cart, setAddProductCart] = useState<ProductCardProps[]>([]);

//   // Function for add products on car
//   const addProductCart = (product: ProductCardProps) => {
//     setAddProductCart(prev => [...prev, product]);
//   };

      
//   // Function for remove products on car
//   const removeProductCart = (productKey: number) => {
//     setAddProductCart(prev => {
//       const index = prev.findIndex(p => p.key === productKey);
//       return index === -1
//         ? prev
//         : ((updated => {
//             updated.splice(index, 1);
//             return updated;
//           })([...prev]));
//     });
//   };

//     // Function for Reset Car
//   const resetCar = () => {
//       setAddProductCart([]);
//   }
  
//     return (
//       <CartContext.Provider value={{cart, addProductCart, removeProductCart, resetCar}}>
//         {children}
//       </CartContext.Provider>
//     );
// };
