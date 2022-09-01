import React from 'react';
import Layout from 'layouts/Layout';
import PublicRoute from 'components/publicRoute/PublicRoute';
import HomeTab from 'components/homeTab/HomeTab';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const DashboardPage = React.lazy(() => import('views/dashboardPage/DashboardPage'));

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <PublicRoute>
                                <DashboardPage />
                            </PublicRoute>
                        }
                    >
                        <Route
                            path="/home"
                            element={
                                <PublicRoute>
                                    <HomeTab />
                                </PublicRoute>
                            }
                        />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
