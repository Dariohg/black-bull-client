// src/components/common/HaircutCard.tsx
import { Box, Image, Text, Flex, Badge, VStack, Button } from '@chakra-ui/react';
import { Haircut } from '../../types';

interface HaircutCardProps {
    haircut: Haircut;
    featured?: boolean;
}

const HaircutCard: React.FC<HaircutCardProps> = ({ haircut, featured = false }) => {
    return (
        <Box
            bg="brand.800"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
            transition="all 0.3s"
            boxShadow={featured ? "0 0 0 2px #ff0000" : "none"}
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
        >
            {featured && (
                <Badge
                    position="absolute"
                    top={3}
                    right={3}
                    zIndex={1}
                    colorScheme="red"
                    fontSize="xs"
                    px={2}
                >
                    DESTACADO
                </Badge>
            )}

            <Image
                src={`/haircuts/${haircut.id}.jpg`}
                alt={haircut.nombre}
                h="300px"
                w="100%"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/400x300/111111/FFFFFF?text=BLACK+BULL"
            />

            <VStack p={5} align="stretch" spacing={2}>
                <Text fontWeight="bold" fontSize="xl">{haircut.nombre}</Text>
                <Flex justify="space-between" align="center">
                    <Text color="accent.500" fontWeight="bold" fontSize="lg">
                        ${haircut.precio.toFixed(2)}
                    </Text>
                    <Button
                        variant="outline"
                        size="sm"
                        borderColor="accent.500"
                        _hover={{ bg: 'accent.500' }}
                    >
                        Reservar
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default HaircutCard;