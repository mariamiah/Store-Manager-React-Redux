import React from 'react';
import Loader from 'react-loader-spinner';


const LoaderSpinner = () => (
  <div>
    <Loader
      type="ThreeDots"
      color="#FFF"
      height={10}
      width={10}
    />
  </div>
);

export default LoaderSpinner;
