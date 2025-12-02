import { Box, Image, Text, VStack, HStack, Button, Flex } from "@chakra-ui/react";

export default function Product({ title, price, image, description, onAdd, onRemove }) {
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
                />
            </Box>
            <VStack align="stretch" spacing={3} mt={4}>
                <Text fontWeight="bold" fontSize="lg" noOfLines={2}>{title}</Text>
                <Text fontSize="sm" color="gray.400" noOfLines={3}>{description}</Text>
            </VStack>
            <Flex justify="space-between" align="center" mt={4}>
                <Text fontSize="xl" fontWeight="bold" color="green.400">${price}</Text>
                <HStack spacing={2}>
                    <Button
                        size="sm"
                        colorScheme="green"
                        _hover={{ transform: "scale(1.05)", boxShadow: "0 0 8px green" }}
                        onClick={onAdd}
                    >
                        Add
                    </Button>
                    <Button
                        size="sm"
                        colorScheme="red"
                        _hover={{ transform: "scale(1.05)", boxShadow: "0 0 8px red" }}
                        onClick={onRemove}
                    >
                        Remove
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
}
