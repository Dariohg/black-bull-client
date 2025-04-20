import { Box } from '@chakra-ui/react';
import HeroSection from '../components/sections/HeroSection';
import FeaturedHaircutsSection from '../components/sections/FeaturedHaircutsSection';
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import LocationsMapSection from '../components/sections/LocationsMapSection';

const HomePage: React.FC = () => {
    return (
        <Box>
            <HeroSection />
            <FeaturedHaircutsSection />
            <FeaturedProductsSection />
            <LocationsMapSection />
        </Box>
    );
};

export default HomePage;