import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData >
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Pedro Soares</h1>
        <h2>@preddoo</h2>

        <p>
          I feel like glitter <a href="https://www.instagram.com/predooooo/">@preddoo</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, RJ
          </li>
          <li>
            <CakeIcon />
            Nascido dia 03 de março de 1998
          </li>
        </ul>

        <Followage>
          <span>
            <strong>135</strong> seguindo
          </span>
          <span>
            <strong>243</strong> seguidores
          </span>
        </Followage>

      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;