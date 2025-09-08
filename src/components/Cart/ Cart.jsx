import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"
import "./Cart.css"

export default function Cart() {

    return (
        <Button variant="ghost" className="btn__cart">
            <Icon size="lg">
                <FiShoppingCart />
            </Icon>
            <div className="shoppingcount">3</div>
        </Button>
    )
}
