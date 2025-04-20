import { Box, Image, Text, Badge, VStack, HStack } from '@chakra-ui/react';
import { Product } from '../../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Box
            bg="brand.800"
            borderRadius="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
        >
            <Box position="relative">
                <Image
                    src={`/products/${product.id}.jpg`}
                    alt={product.nombre}
                    h="250px"
                    w="100%"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/300x250/111111/FFFFFF?text=BLACK+BULL"
                />

                {product.stock <= 5 && (
                    <Badge
                        position="absolute"
                        top={2}
                        right={2}
                        colorScheme="red"
                        variant="solid"
                    >
                        Últimas unidades
                    </Badge>
                )}
            </Box>

            <VStack p={4} align="stretch" spacing={1}>
                <Text fontWeight="bold" fontSize="lg" noOfLines={1}>{product.nombre}</Text>
                <HStack justify="space-between" mt={1}>
                    <Text color="accent.500" fontWeight="bold">${product.precio.toFixed(2)}</Text>
                    <Text color="gray.400" fontSize="sm">Stock: {product.stock}</Text>
                </HStack>
            </VStack>
        </Box>
    );
};

export default ProductCard;