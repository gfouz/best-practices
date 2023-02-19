import React from 'react';
import { Tooltip } from '@chakra-ui/react';

interface IProps {
  tip?: string;
  children: React.ReactNode;
}

function Suggestions(props: IProps) {
  const { tip, children }: IProps = props;
  return (
    <>
      <Tooltip label={tip} hasArrow arrowSize={15}>
        {children}
      </Tooltip>
    </>
  );
}

export default Suggestions;
