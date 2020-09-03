import styled from "styled-components";

export const Container =  styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0px 16px;

  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);

  }
`;
 
export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold; 
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255,255,255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 400;
    color: var(--white); 

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;

    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: 500;
    font-size: 11px;
  }
`;

export const Avatar  = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;
