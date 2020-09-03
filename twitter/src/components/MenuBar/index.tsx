import React from 'react';

import logo from '../../assets/twitter-logo.png';

import Button from '../Button';

import { Container, TopSide, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, Botside, Avatar, ProfileData, ExitIcon } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo src={logo} />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active" >
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Pedro Soares</strong>
          <span>@preddoo</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;