import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from 'components/container/Container';
import AppBar from 'components/appBar/AppBar';

const DashboardPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <AppBar />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default DashboardPage;
