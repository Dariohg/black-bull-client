import { Box, Heading, Text, SimpleGrid, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import { Product } from '../../types';

const FeaturedProductsSection: React.FC = () => {
    // Datos estáticos para productos
    const featuredProducts: Product[] = [
        {
            id: 1,
            nombre: "Pomada Fijadora BLACK BULL",
            precio: 350,
            stock: 25,
            id_sucursal: 1
        },
        {
            id: 2,
            nombre: "Aceite para Barba Premium",
            precio: 280,
            stock: 15,
            id_sucursal: 1
        },
        {
            id: 3,
            nombre: "Shampoo Especial para Cabello",
            precio: 220,
            stock: 8,
            id_sucursal: 1
        },
        {
            id: 4,
            nombre: "Kit Completo de Afeitado",
            precio: 650,
            stock: 3,
            id_sucursal: 2
        }
    ];

    return (
        <Box py={16} bg="brand.900">
            <VStack spacing={8} mb={10} textAlign="center">
                <Heading size="xl">
                    Productos <Text as="span" color="accent.500">Destacados</Text>
                </Heading>
                <Text maxW="container.md" color="gray.400" px={4}>
                    Productos de alta calidad para mantener tu estilo en casa
                </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6} px={{ base: 4, md: 8 }}>
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </SimpleGrid>

            <Box textAlign="center" mt={10}>
                <Button
                    as={RouterLink}
                    to="/products"
                    variant="outline"
                    size="lg"
                    borderColor="accent.500"
                    borderWidth={2}
                    _hover={{ bg: 'accent.500' }}
                >
                    Ver Todos los Productos
                </Button>
            </Box>
        </Box>
    );
};

export default FeaturedProductsSection;