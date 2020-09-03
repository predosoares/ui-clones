import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}


const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ?  'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}


const UserList : React.FC = () => {
  return (
    <Container>
       <Role>Disponível - 1</Role>
       <UserRow nickname="Pedro Soares" />

       <Role>Offline - 12</Role>

       <UserRow nickname="Spotify" isBot/>
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
       <UserRow nickname="Gerson" />
    </Container>
  );
}

export default UserList ;