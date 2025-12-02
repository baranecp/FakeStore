import { useShoppingCart } from "@/context/ShoppingCartContext";
import { useState } from "react";
import CartItem from "./CartItem";
import CompleteOrder from "./CompleteOrder";
import { Box, Button, Center, SimpleGrid, VStack, Text } from "@chakra-ui/react";

export default function ShoppingCart() {
    const { cartItems, total, clearCart } = useShoppingCart();
    const [showSuccess, setShowSuccess] = useState(false);

    function handleBuy() {
        clearCart();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    }

    if (showSuccess) return <CompleteOrder />;

    if (cartItems.length === 0)
        return (
            <Center py={32} bg="#0f0f0f" minH="100vh">
                <Text fontSize="2xl" color="gray.500">
                    Your cart is empty
                </Text>
            </Center>
        );

    return (
        <Box bg="#0f0f0f" minH="100vh" py={{ base: 12, md: 16 }} px={{ base: 4, md: 12 }}>
            <VStack spacing={16} w="100%" maxW="1200px" mx="auto" align="stretch">
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 8, md: 10, lg: 12 }}
                >
                    {cartItems.map((item) => (
                        <Box key={item.id} p={2}>
                            <CartItem {...item} />
                        </Box>
                    ))}
                </SimpleGrid>



                <Box
                    p={10}
                    borderRadius="xl"
                    bg="#1a1a1a"
                    mx="auto"
                    maxW="400px"
                    textAlign="center"
                    transition="all 0.3s"
                    _hover={{ transform: "translateY(-3px)", boxShadow: "0 0 30px rgba(0,255,128,0.6)" }}
                >
                    <VStack spacing={8}>
                        <Text fontSize="2xl" fontWeight="semibold" color="gray.300">
                            Order Summary
                        </Text>

                        <Text fontSize="3xl" fontWeight="bold" color="green.400">
                            ${total.toFixed(2)}
                        </Text>

                        <Button
                            colorScheme="green"
                            size="lg"
                            w="100%"
                            py={6}
                            fontWeight="bold"
                            _hover={{ transform: "scale(1.03)", boxShadow: "0 0 15px green" }}
                            onClick={handleBuy}
                        >
                            COMPLETE ORDER
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
}
