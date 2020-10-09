import React from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';

import typeformSVG from '../../assets/logo.svg';

import { Container, Wrapper, LogoWrapper, Logo, Nav, NavLeft, Link, Button } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(scrollYProgress,
    [0.188, 0.198],
    ['0%', '-100%']
  )

  return (
    <Container style={{ y: headerY }} >
      <Wrapper>
        <LogoWrapper>
          <Logo src={typeformSVG} />
        </LogoWrapper>
        <Nav>
          <NavLeft>
            <Link>Products</Link>
            <Link>Template</Link>
            <Link>Connect</Link>
            <Link>Pricing</Link>
            <Link>Help</Link>
            <Link>Blog</Link>
            <Link>Carrers</Link>
            <Link className="covid">COVID-19</Link>
          </NavLeft>
    
          <Button outlined >Log in</Button>
          <Button>Sign up</Button>
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Header;
