import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Text, Box, Button, HStack, Card, Image } from "@chakra-ui/react"


export default function CartItem({ id, quantity }) {
    const { removeFromCart, data, increaseCartQuantity, decreaseCartQuantity, cartQuantity } = useShoppingCart();

    const item = data?.find(i => i.id === id);
    if (!item) return null;

    return (
        <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
            <Image
                objectFit="cover"
                maxW="200px"
                src={item.image}
                alt="Caffe Latte"
            />
            <Box>
                <Card.Body>
                    <Card.Title mb="2">{item.title}</Card.Title>
                </Card.Body>
                <HStack mb="4" padding="6">
                    <Button variant={"surface"} onClick={() => increaseCartQuantity(id)}>+</Button>
                    <p>{cartQuantity}</p>
                    <Button variant={"surface"} onClick={() => decreaseCartQuantity(id)} >-</Button>
                </HStack>
                <Card.Footer>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        ${(item.price * quantity).toFixed(2)}
                    </Text>
                    <Button variant="surface" color="red" onClick={() => removeFromCart(id)}>Remove</Button>
                </Card.Footer>
            </Box>
        </Card.Root>
    );
}

