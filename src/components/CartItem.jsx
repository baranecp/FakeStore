import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Box, Button, Flex, Image, Text, HStack, VStack } from "@chakra-ui/react";



export default function CartItem({ id, quantity }) {
    const { removeFromCart, data, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

    const item = data?.find(i => i.id === id);
    if (!item) return null;

    return (
        <Flex
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            shadow="sm"
            _hover={{ shadow: "md" }}
            bg="white"
            _dark={{ bg: "gray.700" }}
            align="center"
            gap={4}
            w="100%"
            maxW="md"
            direction={{ base: "column", md: "row" }}
        >
            <Box flexShrink={0}>
                <Image
                    src={item.image}
                    alt={item.title}
                    maxH="120px"
                    maxW="120px"
                    objectFit="contain"
                    borderRadius="md"
                />
            </Box>
            <VStack flex="1" align="stretch" gap={3}>
                <Text fontWeight="bold" fontSize="lg" noOfLines={2}>
                    {item.title}
                </Text>
                <HStack gap={3} align="center">
                    <Button
                        size="sm"
                        borderRadius="full"
                        w="32px"
                        h="32px"
                        bg="red.500"
                        color="white"
                        _hover={{ bg: "red.600" }}
                        onClick={() => decreaseCartQuantity(id)}
                    >
                        -
                    </Button>
                    <Text fontWeight="medium" textAlign="center" minW="24px">
                        {quantity}
                    </Text>
                    <Button
                        size="sm"
                        borderRadius="full"
                        w="32px"
                        h="32px"
                        bg="green.500"
                        color="white"
                        _hover={{ bg: "green.600" }}
                        onClick={() => increaseCartQuantity(id)}
                    >
                        +
                    </Button>
                </HStack>
                <Flex justify="space-between" align="center">
                    <Text fontWeight="semibold" fontSize="md">
                        ${(item.price * quantity).toFixed(2)}
                    </Text>
                    <Button
                        size="sm"
                        bg="red.500"
                        color="white"
                        _hover={{ bg: "red.600" }}
                        onClick={() => removeFromCart(id)}
                    >
                        Remove
                    </Button>
                </Flex>
            </VStack>
        </Flex>
    );
}

