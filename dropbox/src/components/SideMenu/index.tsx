import React, { useEffect, useState, useMemo, useCallback } from 'react';

import { Container } from './styles';

const scrollThreshold = 300;

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleActiveMenu = useCallback(() => {
    setIsActive(state => !state);
  },[]);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);
    window.toggleActiveMenu = toggleActiveMenu;

    return () => window.removeEventListener('scroll', onScroll);
  }, [toggleActiveMenu]);

  const className = useMemo(() => {
    const classes = [
      isActive ? 'open' : '',
      scrollY <= scrollThreshold ? 'scrollOpen' : '',
    ]

    return classes.join(' ').trim();
  }, [isActive, scrollY]);

  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

export default SideMenu;