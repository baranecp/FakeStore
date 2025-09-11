import { useFetchProducts } from "@/services/useFetchProducts";
import { useContext, createContext, useState } from "react";
const ShoppingCartContext = createContext({})

export function ShoppingCartProvider({ children }) {
    const { data, loading, error } = useFetchProducts();
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const total = cartItems.reduce((sum, cartItem) => {
        const item = data.find(i => i.id === cartItem.id)
        return sum + (item?.price || 0) * cartItem.quantity
    }, 0)

    const clearCart = () => setCartItems([])


    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
        });
    }

    function decreaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
        });
    }

    function removeFromCart(id) {
        setCartItems(currItems => currItems.filter(item => item.id !== id));
    }

    return <ShoppingCartContext.Provider value={{ data, total, clearCart, loading, error, cartQuantity, cartItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>{children}</ShoppingCartContext.Provider>

}

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}
