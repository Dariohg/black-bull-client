import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';

interface BaseLayoutProps {
    children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Navbar />
            <Box flex="1">{children}</Box>
            <Footer />
        </Box>
    );
};

export default BaseLayout;