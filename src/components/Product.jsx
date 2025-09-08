import { Button, Card, Image, Text } from "@chakra-ui/react"

export default function Product({ title, price, image, description, onAdd, onRemove }) {
    return (
        <Card.Root maxW="sm" overflow="hidden">
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
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    ${price}
                </Text>
                <Button onClick={onAdd} variant="surface" color="green">Add to cart</Button>
                <Button onClick={onRemove} variant="surface" color="red">Remove</Button>
            </Card.Footer>
        </Card.Root>
    )
}
