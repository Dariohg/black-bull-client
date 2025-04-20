import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from '../components/layout/BaseLayout';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <BaseLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BaseLayout>
        </BrowserRouter>
    );
};

export default AppRoutes;