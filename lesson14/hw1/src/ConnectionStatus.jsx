import React, { useState, useEffect } from 'react';
import ClassNames from 'classnames';

const ConnectionStatus = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const onlineHandler = () => {
      setIsOffline(false);
    };

    const offlineHandler = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  return (
    <div className={ClassNames('status', { status_offline: isOffline })}>
      {isOffline ? 'offline' : 'online'}
    </div>
  );
};

export default ConnectionStatus;
