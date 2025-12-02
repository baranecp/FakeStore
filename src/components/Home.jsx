import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <Box
            bgGradient="linear(to-b, #0f0f0f, #1a1a1a)"
            color="white"
            py={{ base: 20, md: 36 }}
        >
            <Container maxW="3xl">
                <Stack textAlign="center" spacing={{ base: 8, md: 14 }}>
                    <Heading
                        fontWeight={700}
                        fontSize={{ base: "3xl", md: "5xl" }}
                        lineHeight="short"
                        textShadow="0 0 8px #00ff80, 0 0 16px #00ff80"
                    >
                        Turn Shoppers into <br />
                        <Text
                            as="span"
                            color="green.400"
                            textShadow="0 0 12px #00ff80, 0 0 24px #00ff80"
                        >
                            Loyal Fans
                        </Text>
                    </Heading>

                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color="gray.400"
                        maxW="2xl"
                        mx="auto"
                        lineHeight="tall"
                    >
                        Reward your customers with loyalty points, exclusive drops, and special discounts. Build lasting connections while increasing repeat sales.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}
