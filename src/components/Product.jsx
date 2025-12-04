import { Box, Image, Text, VStack, HStack, Button, Flex } from "@chakra-ui/react";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function Product({ id, title, price, image, description, onAdd }) {
    const { cartItems, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const quantity = cartItems.find(i => i.id === id)?.quantity || 0;
    return (
        <Box
            bg="#1a1a1a"
            color="white"
            borderRadius="xl"
            shadow="lg"
            overflow="hidden"
            transition="all 0.3s"
            p={4}
            border="1px solid transparent"
            _hover={{
                shadow: "2xl",
                transform: "translateY(-5px)",
                borderColor: "green.400",
                boxShadow: "0 0 12px green, 0 0 24px green",
            }}
        >
            <Box bg="#111" borderRadius="md" p={2}>
                <Image
                    src={image}
                    alt={title}
                    objectFit="contain"
                    maxH="220px"
                    w="100%"
                    loading="lazy"
                />
            </Box>
            <VStack align="stretch" spacing={3} mt={4}>
                <Text fontWeight="bold" fontSize="lg" noOfLines={2}>{title}</Text>
                <Text fontSize="sm" color="gray.400" noOfLines={3}>{description}</Text>
            </VStack>
            <Flex justify="space-between" align="center" mt={4}>
                <Text fontSize="xl" fontWeight="bold" color="green.400">${price}</Text>
                {quantity === 0 ? (
                    <Button
                        size="sm"
                        colorScheme="green"
                        _hover={{ transform: "scale(1.05)", boxShadow: "0 0 8px green" }}
                        onClick={onAdd}
                    >
                        Add
                    </Button>
                ) : (
                    <HStack spacing={2}>
                        <Button
                            size="sm"
                            w="32px"
                            h="32px"
                            bg="red.500"
                            color="white"
                            borderRadius="full"
                            _hover={{ bg: "red.600", boxShadow: "0 0 8px red" }}
                            onClick={() => decreaseCartQuantity(id)}
                        >
                            -
                        </Button>

                        <Text fontWeight="medium" minW="24px" textAlign="center" color="gray.200">
                            {quantity}
                        </Text>

                        <Button
                            size="sm"
                            w="32px"
                            h="32px"
                            bg="green.500"
                            color="white"
                            borderRadius="full"
                            _hover={{ bg: "green.600", boxShadow: "0 0 8px green" }}
                            onClick={() => increaseCartQuantity(id)}
                        >
                            +
                        </Button>
                    </HStack>
                )}
            </Flex>
        </Box>
    );
}
