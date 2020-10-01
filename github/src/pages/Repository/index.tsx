import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repository: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className='username' to={'/Preddo'}>
          Preddo
        </Link>

        <span>/</span>

        <Link className='reponame' to={'/Preddo/ui-clones'}>
          ui-clones
        </Link>
      </Breadcrumb>

      <p>Contains all mu ui-clones</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/Preddo/ui-clones'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repository;
