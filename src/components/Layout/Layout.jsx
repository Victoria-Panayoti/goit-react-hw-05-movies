import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from '../GlobalStyle';
import { Container, Header, Link, Main   } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>  
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <ToastContainer/>
      <GlobalStyle />
    </Container>
  );
};

export default Layout;
