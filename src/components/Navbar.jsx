import { Link } from "react-router-dom";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Cart from "./Cart/Cart";

export default function Navbar() {
    const { cartQuantity } = useShoppingCart();

    return (
        <Box bg="#111" px={{ base: 6, md: 12 }} py={6} shadow="lg" position="sticky" top="0" zIndex="1000">
            <Flex maxW="1400px" mx="auto" align="center" justify="space-between">
                <Heading
                    as={Link}
                    to="/"
                    size="lg"
                    fontWeight="extrabold"
                    color="green.400"
                    textShadow="0 0 8px #00ff80"
                    _hover={{ opacity: 0.8 }}
                >
                    FakeStore
                </Heading>
                <HStack spacing={{ base: 10, md: 16 }}>
                    <Link
                        to="/"
                        style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "#00ff80",
                            textShadow: "0 0 8px #00ff80",
                            transition: "all 0.3s",
                        }}
                        className="neon-link"
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "#00ff80",
                            textShadow: "0 0 8px #00ff80",
                            transition: "all 0.3s",
                        }}
                        className="neon-link"
                    >
                        Products
                    </Link>
                </HStack>
                <Cart quantity={cartQuantity} />
            </Flex>
            <style>
                {`
          .neon-link:hover {
            text-shadow: 0 0 12px #00ff80, 0 0 24px #00ff80;
            transform: scale(1.05);
          }
        `}
            </style>
        </Box>
    );
}
