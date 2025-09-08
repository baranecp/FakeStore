import { useShoppingCart } from "@/context/ShoppingCartContext"
import CartItem from "./CartItem";

export default function ShoppingCart() {
    const { cartItems } = useShoppingCart();

    if (cartItems.length === 0) return <p>Cart is empty</p>;

    return (
        <div>
            {cartItems.map(item =>
                <CartItem key={item.id} {...item} />
            )}
        </div>
    )
}
