import { useShoppingCart } from "@/context/ShoppingCartContext"
import Cart from "./Cart/ Cart"
export default function Navbar() {
    const { cartQuantity } = useShoppingCart();

    return (
        <div className="menu">
            <h1>FakeStore</h1>

            <Cart quantity={cartQuantity} />
        </div>
    )
}
