import * as React from 'react';
import styled from 'styled-components';
import Suggestions from './Suggestion';

interface IAnchor {
  tip?: string;
  size?: string;
  href: string;
  font?: string;
  color?: string;
  uppercase?: boolean;
  children: React.ReactNode;
}

const WebLink = (props: IAnchor) => {
  return (
    <Suggestions tip={props.tip}>
      <Anchor {...props}>{props.children}</Anchor>
    </Suggestions>
  );
};

export default WebLink;

const Anchor = styled.a<IAnchor>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.font};
  text-decoration: none;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'normal')};
`;
