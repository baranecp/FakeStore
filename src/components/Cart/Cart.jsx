import { Box, Icon } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Cart({ quantity }) {
    return (
        <Link to="/cart">
            <Box
                position="relative"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="50px"
                h="50px"
                bg="#1a1a1a"
                borderRadius="full"
                cursor="pointer"
                _hover={{
                    transform: "scale(1.1)",
                    boxShadow: "0 0 12px green",
                }}
                transition="all 0.2s"
            >
                <Icon as={FiShoppingCart} w={6} h={6} color="green.400" />

                {quantity > 0 && (
                    <Box
                        position="absolute"
                        top="-2"
                        right="-2"
                        bg="green.500"
                        color="white"
                        fontSize="xs"
                        fontWeight="bold"
                        borderRadius="full"
                        px={2}
                        py={1}
                        boxShadow="0 0 8px green"
                    >
                        {quantity}
                    </Box>
                )}
            </Box>
        </Link>
    );
}
