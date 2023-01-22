import { Outlet} from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Loader";
import { Nav, StyledLink, Wrapper } from "./Home.styled";


const Home = () => {
    return (
        <>
            <Nav>
             
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
        
            </Nav>
            <Suspense fallback={<Loader />}>
            <Wrapper>
            <Outlet />
            </Wrapper>
            </Suspense>
            
        </>
    )
}
export default Home;