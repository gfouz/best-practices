import { CSSProperties } from 'react';
//import DotLoader from "react-spinners/DotLoader";
//import RingLoader from "react-spinners/RingLoader";
import RingLoader from 'react-spinners/RingLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function Spinner() {
  return (
    <div className='sweet-loading'>
      <RingLoader
        color='#000000'
        loading={true}
        cssOverride={override}
        size={40}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
}

export default Spinner;
