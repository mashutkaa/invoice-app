import { Routes, Route } from 'react-router-dom';

import MainLayout from './pages/MainLayout';
import Invoices from './pages/Invoices';
import Invoice from './pages/Invoice';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Invoices />} />
                <Route path="invoice" element={<Invoice/>}/>
            </Route>
        </Routes>
    );
}

export default App;
