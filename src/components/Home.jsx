import {
    Box,
    Heading,
    Container,
    Text,
    Stack,

} from '@chakra-ui/react'

export default function Home() {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Turn Shoppers into <br />
                        <Text as={'span'} color={'green.400'}>
                            Loyal Fans
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Grow your business by rewarding every purchase with loyalty points.
                        Give your best customers exclusive access to early product drops, special discounts, and behind-the-scenes previews.
                        Build lasting connections while increasing repeat sales.
                    </Text>
                </Stack>
            </Container>
        </>
    )
}

