import { Box, Text, VStack } from "@chakra-ui/react";

export default function CompleteOrder() {
    return (
        <Box
            bg="#1a1a1a"
            borderRadius="xl"
            p={8}
            mt={8}
            mx="auto"
            maxW="400px"
            textAlign="center"
            boxShadow="0 0 20px rgba(0,255,128,0.5)"
            animation="glow 1.5s ease-in-out infinite alternate"
        >
            <VStack spacing={4}>
                <Text fontSize="3xl" fontWeight="bold" color="green.400">
                    ✅ Success!
                </Text>
                <Text fontSize="md" color="gray.300">
                    Thank you for your purchase 🎉
                </Text>
            </VStack>

            <style>
                {`
          @keyframes glow {
            0% { box-shadow: 0 0 10px rgba(0,255,128,0.3); }
            50% { box-shadow: 0 0 25px rgba(0,255,128,0.7); }
            100% { box-shadow: 0 0 10px rgba(0,255,128,0.3); }
          }
        `}
            </style>
        </Box>
    );
}
