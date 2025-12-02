import { Box, Image, Text, VStack, HStack, Button, Flex } from "@chakra-ui/react";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function CartItem({ id, quantity }) {
    const { removeFromCart, data, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const item = data?.find(i => i.id === id);
    if (!item) return null;

    return (
        <Box
            bg="#1a1a1a"
            borderRadius="xl"
            p={6}
            transition="all 0.3s"
            _hover={{ transform: "translateY(-3px)", boxShadow: "0 0 25px rgba(0,255,128,0.5)" }}
        >
            <Flex direction={{ base: "column", md: "row" }} align="center" gap={6}>
                <Box flexShrink={0} bg="#111" borderRadius="md" p={3}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        objectFit="contain"
                        maxH="120px"
                        maxW="120px"
                    />
                </Box>

                <VStack align="stretch" spacing={4} flex="1">
                    <Text fontWeight="bold" fontSize="lg" noOfLines={2} color="gray.100">
                        {item.title}
                    </Text>

                    <HStack spacing={3}>
                        <Button
                            size="sm"
                            w="36px"
                            h="36px"
                            bg="red.500"
                            color="white"
                            _hover={{ bg: "red.600", boxShadow: "0 0 8px red" }}
                            borderRadius="full"
                            onClick={() => decreaseCartQuantity(id)}
                        >
                            -
                        </Button>

                        <Text fontWeight="medium" textAlign="center" minW="24px" color="gray.200">
                            {quantity}
                        </Text>

                        <Button
                            size="sm"
                            w="36px"
                            h="36px"
                            bg="green.500"
                            color="white"
                            _hover={{ bg: "green.600", boxShadow: "0 0 8px green" }}
                            borderRadius="full"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            +
                        </Button>
                    </HStack>
                    <Flex justify="space-between" align="center" mt={2}>
                        <Text fontWeight="bold" fontSize="lg" color="green.400">
                            ${(item.price * quantity).toFixed(2)}
                        </Text>

                        <Button
                            size="sm"
                            bg="red.500"
                            _hover={{ bg: "red.600", boxShadow: "0 0 8px red" }}
                            color="white"
                            borderRadius="md"
                            onClick={() => removeFromCart(id)}
                        >
                            Remove
                        </Button>
                    </Flex>
                </VStack>
            </Flex>
        </Box>
    );
}
