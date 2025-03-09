// hooks/useSocketData.ts
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useReduxTypes'; // assuming you have a custom hook for Redux dispatch
import { setIndexData } from '@/store/Reducers/stockData'; // action to set data in Redux
import socket from '@/utils/socket'; // assuming the socket instance is already created and exported

const useSocketData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleSocketOpen = () => {
      console.log('WebSocket is open.');
      socket.addEventListener('message', handleMessage);
    };

    const handleMessage = (message: MessageEvent) => {
      const response = JSON.parse(message.data);

      if (response.event === 'indexFeeds') {
        const parsedData = JSON.parse(response.data);

        const name = parsedData.Name;
        const ltp = parsedData.LTP;
        const percentage = parsedData.percentage;

        if (!name || ltp === undefined || percentage === undefined) {
          console.error('Invalid data:', parsedData);
          return;
        }

        // Create or update a Map to store the data in Redux
        const newData = new Map([[name, { ltp, percentage }]]);
        dispatch(setIndexData(newData));
      }
    };

    if (socket.readyState === WebSocket.OPEN) {
      socket.addEventListener('message', handleMessage);
    } else {
      socket.addEventListener('open', handleSocketOpen);
    }

    return () => {
      socket.removeEventListener('message', handleMessage);
    };
  }, [dispatch]);

  // No need to return anything, the hook handles the connection and data dispatch
};

export default useSocketData;
