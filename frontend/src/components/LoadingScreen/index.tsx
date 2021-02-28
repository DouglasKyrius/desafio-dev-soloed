import React, { useContext, useEffect, useState } from 'react';

// STYLED COMPONENTS
import { LoadingContainer, Loader, LoaderInner } from './LoadingElements';

// CONTEXT
import { DataContext } from '../../context/DataProvider';

const LoadingScreen: React.FC = () => {
  const contextValue = useContext(DataContext);
  const loadingData = contextValue.loadingData;
  const [display, setDisplay] = useState('block');
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!loadingData) {
      setOpacity(0);
      setTimeout(() => setDisplay('none'), 300);
    }
  }, [loadingData]);

  return (
    <LoadingContainer
      loadingData={loadingData} style={{ display, opacity }}
    >
      <Loader>
        <LoaderInner />
      </Loader>
    </LoadingContainer>
  );
};

export default LoadingScreen;
