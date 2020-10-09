import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';


interface ButtonProps {
  outlined?: boolean;
}

export const Container = styled(motion.header)`
  width: 100%;
  height: 168px;
  background: transparent;

  position: fixed;
  top: 0px;
  z-index: 1001;
  backface-visibility: hidden;
`;

export const Wrapper = styled.header`
  width: 1200px;
  max-width: 1200px;
  padding: 32px 24px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 103px;
  width: 160px;
`;

export const Logo = styled(ReactSVG)`
  position: absolute;
  left: -100px;
  top: -100px;

  width: 300px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const navFall = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 32px;
  
  animation: ${navFall} 0.8s ease-in-out;
`;

export const Link = styled.a`
  font-weight: 400;
  padding: 24px 0;
  margin-right: 24px;
  cursor: pointer;

  &.covid {
    font-size: 12px;
    background: var(--alert-color);
    color: var(--secundary-color);
    border-radius: 4px;
    padding: 4px 6px 1px 6px;
    margin-right: 0px;
  }
`;

export const Button = styled.a<ButtonProps>`
  height: 42px;
  padding: 8px 16px;
  line-height: 24px;
  border: 1px solid var(--primary-color);
  border-radius: 2px;

  ${props => props.outlined
  ? "background-color:  var(--secundary-color); color: var(--primary-color);"
  : "background-color:  var(--primary-color); color: var(--secundary-color);"
  }
  text-decoration: none;
  cursor: pointer;

  & + a {
    margin-left: 16px
  }
`;

