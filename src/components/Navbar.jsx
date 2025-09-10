import { Link } from "react-router-dom";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Cart from "./Cart/ Cart";

export default function Navbar() {
    const { cartQuantity } = useShoppingCart();

    return (
        <div className="menu">
            <h1>FakeStore</h1>
            <nav style={{ display: "flex", alignItems: "center" }}>
                <ul style={{ display: "flex", gap: "1rem", listStyle: "none", fontSize: "1.5rem" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>
            <Cart quantity={cartQuantity} />
        </div>
    );
}
