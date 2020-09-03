import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Header, Dot, Content, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon  } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Pedro Soares</strong>
            <span>@preddoo</span>
            <Dot />
            <time>10 de jul</time>
          </Header>

          <Description>Caceta marquin, dá trabalho hein!</Description>
          
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              42
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;