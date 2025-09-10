import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Text, Box, Button, HStack, Card, Image } from "@chakra-ui/react"


export default function CartItem({ id, quantity }) {
    const { removeFromCart, data, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

    const item = data?.find(i => i.id === id);
    if (!item) return null;

    return (
        <Card.Root flexDirection="row" overflow="hidden" maxW="md" alignItems="center" shadow="md" justifyContent="center" margin="0 auto" padding="1">
            <Image
                objectFit="cover"
                maxW="200px"
                src={item.image}
                alt="Caffe Latte"
            />
            <Box>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <HStack padding="6">
                    <Button variant={"surface"} onClick={() => increaseCartQuantity(id)}>+</Button>
                    <p>{quantity}</p>
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

