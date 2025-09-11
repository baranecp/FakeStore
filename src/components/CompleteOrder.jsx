import {
    Alert, Stack
} from "@chakra-ui/react";


export default function CompleteOrder() {
    return (
        <Stack>
            <Alert.Root status="success" mt={4} borderRadius="md">
                <Alert.Indicator />
                <Alert.Title>Success!</Alert.Title>
                <Alert.Description>
                    Thank you for your purchase 🎉
                </Alert.Description>
            </Alert.Root>
        </Stack>
    )
}
