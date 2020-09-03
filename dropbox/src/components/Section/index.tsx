import React, { useMemo, useCallback } from 'react'

import { Container, Content, HeaderWrapper, Header, DropboxLogo } from './styles';

interface ISectionProps {
  variant: 'blue' | 'white' | 'black' | 'beige';
  title: string;
  description: string;
}

const Section: React.FC<ISectionProps> = ({variant, title, description}) => {
  const handleToggle = useCallback(() => {
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }, [])
  
  const buttonVariant = useMemo(() => {
    return Math.round(Math.random());
  }, []);

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <button onClick={handleToggle}>{buttonVariant === 1 ? "Interagir" : "Acessar"}</button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  )
}

export default Section;
