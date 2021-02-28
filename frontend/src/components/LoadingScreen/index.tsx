import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataProvider';

import { LoadingContainer, Loader, LoaderInner } from './LoadingElements';

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
