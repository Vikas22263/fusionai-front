let socket = null;
let reconnectInterval = 5000; // Reconnect every 5 seconds
let maxAttempts = 10; // Max reconnection attempts
let attempt = 0;

const connectWebSocket = () => {
  if (socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)) {
    return socket; // Already connected or connecting
  }

  try {
    socket = new WebSocket('https://shrawantravels.com/fusion/socket');

    socket.onopen = () => {
      console.log('WebSocket connected');
      attempt = 0; // Reset attempts after successful connection
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = (event) => {
      console.warn(`WebSocket closed (Code: ${event.code}). Attempting to reconnect...`);
      if (attempt < maxAttempts) {
        attempt++;
        setTimeout(connectWebSocket, reconnectInterval);
      } else {
        console.error('Max reconnection attempts reached. Stopping.');
      }
    };
  } catch (error) {
    console.error('WebSocket connection failed:', error);
  }

  return socket;
};

export const getWebSocket = () => connectWebSocket();
