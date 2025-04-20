// src/components/layout/Footer.tsx
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Heading,
    Link,
    Image,
    IconButton,
    HStack
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <Box bg="black" color="white" pt={10} pb={5}>
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={10}>
                    {/* Logo y descripción */}
                    <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
                        <Image src="/logo.svg" alt="BLACK BULL" h="60px" />
                        <Text color="gray.400" textAlign={{ base: 'center', md: 'left' }}>
                            La experiencia definitiva en barbería para el hombre moderno
                        </Text>
                        <HStack spacing={4} mt={2}>
                            <IconButton
                                aria-label="Facebook"
                                icon={<FaFacebook />}
                                size="md"
                                colorScheme="whiteAlpha"
                                variant="ghost"
                                borderRadius="full"
                            />
                            <IconButton
                                aria-label="Twitter"
                                icon={<FaTwitter />}
                                size="md"
                                colorScheme="whiteAlpha"
                                variant="ghost"
                                borderRadius="full"
                            />
                            <IconButton
                                aria-label="Instagram"
                                icon={<FaInstagram />}
                                size="md"
                                colorScheme="whiteAlpha"
                                variant="ghost"
                                borderRadius="full"
                            />
                            <IconButton
                                aria-label="YouTube"
                                icon={<FaYoutube />}
                                size="md"
                                colorScheme="whiteAlpha"
                                variant="ghost"
                                borderRadius="full"
                            />
                        </HStack>
                    </Stack>

                    {/* Links rápidos */}
                    <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
                        <Heading size="sm" mb={2} color="accent.500">
                            Enlaces Rápidos
                        </Heading>
                        <Link as={RouterLink} to="/" color="gray.400" _hover={{ color: 'white' }}>
                            Inicio
                        </Link>
                        <Link as={RouterLink} to="/services" color="gray.400" _hover={{ color: 'white' }}>
                            Servicios
                        </Link>
                        <Link as={RouterLink} to="/products" color="gray.400" _hover={{ color: 'white' }}>
                            Productos
                        </Link>
                        <Link as={RouterLink} to="/location" color="gray.400" _hover={{ color: 'white' }}>
                            Ubicaciones
                        </Link>
                    </Stack>

                    {/* Servicios */}
                    <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
                        <Heading size="sm" mb={2} color="accent.500">
                            Servicios
                        </Heading>
                        <Link color="gray.400" _hover={{ color: 'white' }}>
                            Cortes de Cabello
                        </Link>
                        <Link color="gray.400" _hover={{ color: 'white' }}>
                            Arreglo de Barba
                        </Link>
                        <Link color="gray.400" _hover={{ color: 'white' }}>
                            Afeitado Clásico
                        </Link>
                        <Link color="gray.400" _hover={{ color: 'white' }}>
                            Tratamientos Capilares
                        </Link>
                    </Stack>

                    {/* Contacto */}
                    <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
                        <Heading size="sm" mb={2} color="accent.500">
                            Contacto
                        </Heading>
                        <Text color="gray.400">info@blackbull.com</Text>
                        <Text color="gray.400">+502 2456-7890</Text>
                        <Text color="gray.400">
                            Av. Reforma 234, Zona 10
                        </Text>
                    </Stack>
                </SimpleGrid>

                <Flex
                    borderTopWidth={1}
                    borderColor="gray.800"
                    pt={5}
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="center"
                    fontSize="sm"
                    color="gray.500"
                >
                    <Text textAlign={{ base: 'center', md: 'left' }}>
                        © {new Date().getFullYear()} BLACK BULL. Todos los derechos reservados.
                    </Text>
                    <HStack spacing={4} mt={{ base: 3, md: 0 }}>
                        <Link _hover={{ color: 'white' }}>Privacidad</Link>
                        <Link _hover={{ color: 'white' }}>Términos</Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;