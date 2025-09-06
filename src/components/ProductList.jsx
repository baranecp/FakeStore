import { Grid } from '@chakra-ui/react';
import { useFetchProducts } from '../services/useFetchProducts'
import Product from './Product';

export default function ProductList() {
    const { data, loading, error } = useFetchProducts();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong: {error}</p>

    return (
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
            {data.map(product => (
                <Product key={product.id} title={product.title} price={product.price} description={product.description} image={product.image} />
            ))}
        </Grid>
    )
}

