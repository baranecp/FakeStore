import { useShoppingCart } from "@/context/ShoppingCartContext"
import CartItem from "./CartItem";

export default function ShoppingCart() {
    const { cartItems } = useShoppingCart();

    if (cartItems.length === 0) return <p>Cart is empty</p>;

    return (
        <div style={{ display: "flex", gap: "1rem", flexWrap: 'wrap' }}>
            {cartItems.map(item =>
                <CartItem key={item.id} {...item} />
            )}
        </div>
    )
}
