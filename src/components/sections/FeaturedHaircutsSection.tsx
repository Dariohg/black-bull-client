import { Box, Heading, Text, SimpleGrid, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import HaircutCard from '../common/HaircutCard';
import { Haircut } from '../../types';

const FeaturedHaircutsSection: React.FC = () => {
    // Datos estáticos para cortes de cabello
    const featuredHaircuts: Haircut[] = [
        {
            id: 1,
            nombre: "Fade Clásico",
            precio: 250
        },
        {
            id: 2,
            nombre: "Pompadour Moderno",
            precio: 300
        },
        {
            id: 3,
            nombre: "Corte y Barba Premium",
            precio: 400
        },
        {
            id: 4,
            nombre: "Undercut Texturizado",
            precio: 280
        }
    ];

    return (
        <Box py={16} bg="brand.800">
            <VStack spacing={8} mb={10} textAlign="center">
                <Heading size="xl">
                    Nuestros <Text as="span" color="accent.500">Estilos</Text>
                </Heading>
                <Text maxW="container.md" color="gray.400" px={4}>
                    Cortes modernos y clásicos para todos los gustos
                </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} px={{ base: 4, md: 8 }}>
                {featuredHaircuts.map((haircut, index) => (
                    <HaircutCard
                        key={haircut.id}
                        haircut={haircut}
                        featured={index === 0}
                    />
                ))}
            </SimpleGrid>

            <Box textAlign="center" mt={10}>
                <Button
                    as={RouterLink}
                    to="/services"
                    variant="outline"
                    size="lg"
                    borderColor="white"
                    borderWidth={2}
                    _hover={{ bg: 'whiteAlpha.200' }}
                >
                    Ver Todos los Estilos
                </Button>
            </Box>
        </Box>
    );
};

export default FeaturedHaircutsSection;