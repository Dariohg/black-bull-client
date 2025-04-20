// src/components/sections/LocationsMapSection.tsx
import { Box, Heading, Text, SimpleGrid, VStack, Flex, Icon } from '@chakra-ui/react';
import { PhoneIcon, TimeIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Location } from '../../types';

const LocationCard: React.FC<{ location: Location }> = ({ location }) => {
    return (
        <Box
            bg="brand.800"
            p={5}
            borderRadius="md"
            borderLeft={location.isPrimary ? "4px solid" : "none"}
            borderColor={location.isPrimary ? "accent.500" : "transparent"}
            transition="transform 0.3s"
            _hover={{ transform: 'translateY(-5px)' }}
        >
            <VStack align="start" spacing={3}>
                <Heading size="md">{location.nombre}</Heading>

                <Flex align="center">
                    <Icon as={FaMapMarkerAlt} color="accent.500" mr={2} />
                    <Text>{location.direccion}</Text>
                </Flex>

                <Flex align="center">
                    <Icon as={PhoneIcon} color="accent.500" mr={2} />
                    <Text>{location.telefono}</Text>
                </Flex>

                <Flex align="center">
                    <Icon as={TimeIcon} color="accent.500" mr={2} />
                    <Text fontStyle="italic">{location.horario}</Text>
                </Flex>
            </VStack>
        </Box>
    );
};

const LocationsMapSection: React.FC = () => {
    // Datos estáticos para sucursales
    const locations: Location[] = [
        {
            id: 1,
            nombre: "BLACK BULL Central",
            direccion: "Av. Reforma 234, Zona 10",
            telefono: "+502 2456-7890",
            horario: "Lun-Sáb: 9AM-8PM, Dom: 10AM-6PM",
            isPrimary: true
        },
        {
            id: 2,
            nombre: "BLACK BULL Norte",
            direccion: "C.C. Plaza Norte, Local 45",
            telefono: "+502 2345-6789",
            horario: "Lun-Sáb: 10AM-7PM, Dom: Cerrado"
        }
    ];

    return (
        <Box py={16} bg="brand.900">
            <VStack spacing={8} mb={10} textAlign="center">
                <Heading size="xl">
                    Nuestras <Text as="span" color="accent.500">Ubicaciones</Text>
                </Heading>
                <Text maxW="container.md" color="gray.400" px={4}>
                    Encuentra la sucursal BLACK BULL más cercana a ti
                </Text>
            </VStack>

            {/* Aquí irá el mapa */}
            <Box
                mx="auto"
                maxW="container.xl"
                h="400px"
                bg="gray.700"
                mb={8}
                borderRadius="md"
                overflow="hidden"
                position="relative"
            >
                {/* Placeholder para el mapa real con Google Maps o similar */}
                <Text
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    color="gray.400"
                    fontSize="lg"
                >
                    Mapa interactivo de sucursales
                </Text>
            </Box>

            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={6}
                maxW="container.xl"
                mx="auto"
                px={4}
            >
                {locations.map(location => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default LocationsMapSection;