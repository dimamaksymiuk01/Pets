/* core */
import { useEffect, useState } from 'react';

export const useMount = () => {
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return isMount;
};
