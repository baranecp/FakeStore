import { Button, Card, Image, Text } from "@chakra-ui/react"

export default function Product({ title, price, image, description, onAdd, onRemove }) {
    return (
        <Card.Root maxW="sm" overflow="hidden" paddingTop="2.5" shadow="xl" >
            <Image
                src={image}
                alt="Green double couch with wooden legs"
                fit="contain"
                maxH='250px'
            />
            <Card.Body gap="2">
                <Card.Title>{title}</Card.Title>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2" color="green.700">
                    ${price}
                </Text>
                <Button onClick={onAdd} variant="surface" bg="green.500"
                    _hover={{ bg: "green.600" }}
                    color="white">Add to cart</Button>
                <Button onClick={onRemove} variant="surface" bg="red.500"
                    _hover={{ bg: "red.600" }}
                    color="white">Remove</Button>
            </Card.Footer>
        </Card.Root>
    )
}
