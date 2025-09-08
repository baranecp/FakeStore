import { Grid } from '@chakra-ui/react';
import Product from './Product';
import { useShoppingCart } from '@/context/ShoppingCartContext';

export default function ProductList() {
    const { data: products, loading, error, increaseCartQuantity, removeFromCart } = useShoppingCart();


    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong: {error}</p>

    return (
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
            {products.map(product => (
                <Product onAdd={() => increaseCartQuantity(product.id)} onRemove={() => removeFromCart(product.id)} key={product.id} title={product.title} price={product.price} description={product.description} image={product.image} />
            ))}
        </Grid>
    )
}

