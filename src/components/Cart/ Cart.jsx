import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"
import "./Cart.css"
import { Link } from "react-router";

export default function Cart({ quantity }) {

    return (
        <Button variant="ghost" className="btn__cart">
            <Link to="/cart">
                <Icon size="lg">
                    <FiShoppingCart />
                </Icon>
                <div className="shoppingcount">{quantity}</div>
            </Link>
        </Button>
    )
}
