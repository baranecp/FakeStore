import { SimpleGrid, Center, Text, Box, Heading } from "@chakra-ui/react";
import Product from "./Product";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function ProductList() {
    const { data: products, loading, error, increaseCartQuantity, removeFromCart } =
        useShoppingCart();

    if (loading)
        return (
            <Center py={32}>
                <Text color="gray.500" fontSize="2xl">
                    Loading products...
                </Text>
            </Center>
        );

    if (error)
        return (
            <Center py={32}>
                <Text color="red.400" fontSize="2xl">
                    Something went wrong: {error}
                </Text>
            </Center>
        );

    return (
        <Box
            bgGradient="linear(to-b, #0f0f0f, #1a1a1a)"
            minH="100vh"
            py={{ base: 10, md: 16 }}
            px={{ base: 4, md: 12, lg: 24 }}
        >
            <Heading
                textAlign="center"
                mb={12}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="green.400"
                textShadow="0 0 8px #00ff90"
            >
                Our Products
            </Heading>

            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing={{ base: 8, md: 10, lg: 12 }}
            >
                {products.map((product) => (
                    <Box key={product.id} p={2}>
                        <Product
                            {...product}
                            onAdd={() => increaseCartQuantity(product.id)}
                            onRemove={() => removeFromCart(product.id)}
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}
