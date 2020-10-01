import React from 'react';
import { Link } from 'react-router-dom';

import { Container, RepoInfo, RepoIcon, RepoStatus, StarsIcon, ForksIcon } from './styles';

interface RepoCardProps {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<RepoCardProps> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : "other" ;

  return (
    <Container>
      <RepoInfo>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </RepoInfo>

      <RepoStatus>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarsIcon/>
            <span>{stars}</span>
          </li>
          <li>
            <ForksIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </RepoStatus>
    </Container>
  );
};

export default RepoCard;
