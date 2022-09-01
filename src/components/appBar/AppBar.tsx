import TitleLogo from "../titleLogo/TitleLogo";
import { Container } from "components/container/Container";
import { Header, HeaderBox, Link } from "./AppBar.styled";

const AppBar = () => {
    return (
        <>
            <Header>
                <Container>
                    <HeaderBox>
                        <Link to="/home">
                            <TitleLogo />
                        </Link>
                    </HeaderBox>
                </Container>
            </Header>
        </>
    );
};

export default AppBar;
