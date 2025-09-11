import { useShoppingCart } from "@/context/ShoppingCartContext"
import CartItem from "./CartItem";
import { Button } from "@chakra-ui/react";


export default function ShoppingCart() {
    const { cartItems, data } = useShoppingCart();

    if (cartItems.length === 0) return <p>Cart is empty</p>;

    const total = cartItems.reduce((sum, cartItem) => {
        const item = data.find(i => i.id === cartItem.id)
        return sum + (item?.price || 0) * cartItem.quantity
    }, 0)

    return (
        <>
            <div style={{ display: "flex", gap: "1rem", flexWrap: 'wrap' }}>
                {cartItems.map(item =>
                    < CartItem key={item.id} {...item} />
                )}
            </div>
            <p>{total}</p>
            <Button variant="surface" alignSelf="center" color="green" marginBlockStart="5">Buy</Button>
        </>
    )
}
