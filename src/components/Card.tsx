import styled from 'styled-components';
import { Box, Heading, Skeleton } from '@chakra-ui/react';

export default function Card() {
  return (
    <StyledSkeleton>
      <Heading size='md' color='#666666'>
        LOADING...
      </Heading>
      <Box w='100%'>
        <Skeleton height='20px' startColor='grey' />
      </Box>
    </StyledSkeleton>
  );
}

const StyledSkeleton = styled.div`
  width: 100%;
  padding: 4em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
