import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/loader.json';


const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="spinner">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
}

export default Spinner;