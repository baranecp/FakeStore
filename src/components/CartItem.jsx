import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function CartItem({ id, quantity }) {
    const { removeFromCart, data } = useShoppingCart();

    const item = data?.find(i => i.id === id);
    if (!item) return null;

    return (
        <li>
            {item.title} - ${item.price} × {quantity} = ${(item.price * quantity).toFixed(2)}
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </li>
    );
}

