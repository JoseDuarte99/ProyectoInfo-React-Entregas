import type { ProductOnCartProps } from "../typing/Typing";

type CartActionsProps =
| { type: "ADD"; payload: ProductOnCartProps[] }
| { type: "REMOVE"; payload: ProductOnCartProps[] }
| { type: "RESET" };

export type CartStateProps = {
    productsInCart: ProductOnCartProps[];
};

function CartReducer(state: CartStateProps, action: CartActionsProps): CartStateProps {
    switch (action.type) {
        case "ADD": {
            
            const product = action.payload[0];
            const keyToAdd = product.key;

            console.log(state.productsInCart.some(p => p.key === keyToAdd))
            if (state.productsInCart.some(p => p.key === keyToAdd)) {
                

                const productsUpdated = state.productsInCart.map(p => p.key === keyToAdd
                    ? { ...p, units: p.units + 1}
                    : p );
                return {
                    ...state,
                    productsInCart: productsUpdated,
                }};

        return {
            ...state,
            productsInCart: [...state.productsInCart, action.payload[0]],
        }};
    
        case "REMOVE": {
        const keyToRemove = action.payload[0]?.key;
        
        if (keyToRemove === undefined) return state;
        const updatedCart = [...state.productsInCart];
        
        const index = updatedCart.findIndex(item => item.key === keyToRemove);
        
        if (index !== -1) {
            updatedCart.splice(index, 1);
        }
        
        return {
            ...state,
            productsInCart: updatedCart,
        };}
        
        
        case "RESET":
        return {
            productsInCart: [],
        };
        
        default:
        return state;
    }
}

export default CartReducer;
