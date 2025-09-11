import { useShoppingCart } from "@/context/ShoppingCartContext";
import { useState } from "react";
import CartItem from "./CartItem";
import { Button, Text, VStack, SimpleGrid, Box, Center } from "@chakra-ui/react";
import CompleteOrder from "./CompleteOrder";

export default function ShoppingCart() {
    const { cartItems, total, clearCart } = useShoppingCart();
    const [showSuccess, setShowSuccess] = useState(false);

    function handleBuy() {
        clearCart();
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    }

    if (showSuccess) {
        return <CompleteOrder />;
    }

    if (cartItems.length === 0)
        return <Text fontSize="lg" color="gray.500" textAlign="center">Cart is empty</Text>;

    return (
        <Center py={10}>
            <VStack
                gap={8}
                w="100%"
                maxW="1200px"
                align="stretch"
            >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </SimpleGrid>
                <Box
                    p={6}
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="md"
                    bg="white"
                    maxW="400px"
                    alignSelf="center"
                    _dark={{ bg: "gray.700" }}
                >
                    <VStack gap={4} align="stretch">
                        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                            Total: ${total.toFixed(2)}
                        </Text>
                        <Button
                            bg="green.500"
                            _hover={{ bg: "green.600" }}
                            color="white"
                            size="lg"
                            w="100%"
                            onClick={handleBuy}
                        >
                            COMPLETE ORDER
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Center >
    );
}
