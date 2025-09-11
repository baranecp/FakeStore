import { Box, Heading, Text } from '@chakra-ui/react'


export default function CompleteOrder() {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading as="h2" size="xl" mt={6} mb={2}>
                This is the headline
            </Heading>
            <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Text>
        </Box>
    )
}
