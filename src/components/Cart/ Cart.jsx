import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"
import "./Cart.css"
import { Link } from "react-router";

export default function Cart({ quantity }) {

    return (
        <Link to="/cart">
            <Button variant="ghost" className="btn__cart">
                <Icon size="xl">
                    <FiShoppingCart />
                </Icon>
                <div className={quantity > 0 ? "shoppingcount" : ''}>{quantity > 0 ? quantity : null}</div>
            </Button>
        </Link>
    )
}
