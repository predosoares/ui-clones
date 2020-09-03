import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  },[messagesRef])

  return (
    <Container>  
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />
        <ChannelMessage
          author="Pedro Soares"
          date="06/07/2020"
          content="Eu refiz a interface do discord em muitas horas..."
        />

        <ChannelMessage
          author="Batata"
          date="06/07/2020"
          content={
            <>
              <Mention>@Pedro Soares</Mention>, você é uma batata.
            </>
          }
          hasMention
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre...'/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;