import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/react';

function Notfound() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <>
      <Tooltip label='Close'>
        <NotFoundCloseButton className='backwards' onClick={handleClick}>
          X
        </NotFoundCloseButton>
      </Tooltip>
      <NotfoundContainer>
        <NotFoundImage />
      </NotfoundContainer>
    </>
  );
}

export default Notfound;
const NotfoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #23074a;
`;
const NotFoundImage = styled.img.attrs({ src: './images/notfound.jpg', alt: 'logo' })`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: fill;
`;
const NotFoundCloseButton = styled.button`
  position: fixed;
  top: 9px;
  right: 1em;
  width: 30px;
  height: 30px;
  color: #ff0000;
  display: flex;
  justify-content: center;
  line-height: 26px;
  font-weight: bolder;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 10px #777777;
  &:hover {
    color: white;
    background-color: red;
  }
`;
