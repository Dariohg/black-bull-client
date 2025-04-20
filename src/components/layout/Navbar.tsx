import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
    Text,
    Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Links = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Productos', path: '/products' },
    { name: 'Ubicación', path: '/location' }
];

const NavLink = ({ children, to }: { children: React.ReactNode, to: string }) => (
    <Box
        as={RouterLink}
        to={to}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            color: 'accent.500',
        }}
        fontWeight="medium"
        transition="all 0.3s"
    >
        {children}
    </Box>
);

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="brand.800" px={4} position="sticky" top={0} zIndex={10}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                    variant="ghost"
                    _hover={{ bg: 'brand.700' }}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>
                        <Text fontSize="2xl" fontWeight="bold">BLACK BULL</Text>
                    </Box>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link.name} to={link.path}>{link.name}</NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Button
                    as={RouterLink}
                    to="/booking"
                    bg="accent.500"
                    color="white"
                    _hover={{ bg: 'accent.600' }}
                    size="sm"
                    display={{ base: 'none', md: 'inline-flex' }}
                >
                    Reservar Ahora
                </Button>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link.name} to={link.path}>{link.name}</NavLink>
                        ))}
                        <Button
                            as={RouterLink}
                            to="/booking"
                            bg="accent.500"
                            color="white"
                            _hover={{ bg: 'accent.600' }}
                            w="full"
                            size="sm"
                        >
                            Reservar Ahora
                        </Button>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;