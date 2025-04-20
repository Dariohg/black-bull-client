import { Box, Button, Heading, Text, VStack, Container, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <Box
            position="relative"
            h={{ base: "90vh", md: "80vh" }}
            overflow="hidden"
        >
            {/* Imagen de fondo con overlay */}
            <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                zIndex={-1}
            >
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Black Bull Barbershop"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    filter="brightness(0.4)"
                    fallbackSrc="https://via.placeholder.com/1920x1080/111111/FFFFFF?text=BLACK+BULL"
                />
            </Box>

            {/* Contenido del hero */}
            <Container maxW="container.xl" h="100%">
                <VStack
                    h="100%"
                    justify="center"
                    align={{ base: "center", md: "flex-start" }}
                    textAlign={{ base: "center", md: "left" }}
                    spacing={6}
                    px={4}
                >
                    <Heading
                        size="2xl"
                        fontWeight="black"
                        lineHeight="1.1"
                    >
                        ESTILO QUE <Text as="span" color="accent.500">DEFINE</Text><br />
                        TU PERSONALIDAD
                    </Heading>

                    <Text
                        fontSize="xl"
                        maxW="container.md"
                        color="gray.300"
                    >
                        Experimenta el arte de la barbería moderna con los mejores estilistas en BLACK BULL
                    </Text>

                    <Box pt={4}>
                        <Button
                            as={RouterLink}
                            to="/booking"
                            size="lg"
                            bg="accent.500"
                            color="white"
                            _hover={{ bg: 'accent.600' }}
                            mr={3}
                        >
                            Reserva Tu Corte
                        </Button>

                        <Button
                            as={RouterLink}
                            to="/services"
                            size="lg"
                            variant="outline"
                            borderWidth={2}
                            borderColor="white"
                            _hover={{ bg: 'whiteAlpha.200' }}
                        >
                            Nuestros Servicios
                        </Button>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default HeroSection;