// src/hooks/useLoadingNavigation.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const useLoadingNavigation = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    setProgress(100);
    setTimeout(() => {
      navigate(url);
      setProgress(0);
    }, 1000); // Adjust delay to simulate loading
  };

  const LoadingBarComponent = ( props ) => (
    <LoadingBar
      color={props.color}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );

  return { handleNavigation, LoadingBarComponent };
};

export default useLoadingNavigation;
