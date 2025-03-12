import { Routes, Route } from 'react-router-dom';

import MainLayout from './pages/MainLayout';
import InvoicesPage from './pages/InvoicesPage';
import InvoicePage from './pages/InvoicePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<InvoicesPage />} />
                <Route path="invoice" element={<InvoicePage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
