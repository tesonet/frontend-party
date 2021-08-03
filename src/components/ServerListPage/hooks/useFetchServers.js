import { useFetchData } from '@Common';

import { useState } from 'react';
import { getServers } from '../services';
import { useLocalStorage } from '../../../hooks';
import { TOKEN } from '../../../config/constants';

const useFetchServers = (errorHandler) => {
  const { value: token } = useLocalStorage(TOKEN);
  const [servers, setServers] = useState(null);

  const { loaded: serversLoaded } = useFetchData(
    async () => {
      const response = await getServers(token);
      setServers(response);
    },
    errorHandler,
  );

  return {
    servers,
    serversLoaded,
    setServers,
  };
};

export default useFetchServers;
