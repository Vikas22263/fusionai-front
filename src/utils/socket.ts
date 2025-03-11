// utils/socket.js
let socket = null;

export const getWebSocket = () => {
  if (!socket || socket.readyState === WebSocket.CLOSED || socket.readyState === WebSocket.CLOSING) {
    try {
      socket = new WebSocket('https://shrawantravels.com/fusion/socket');
    } catch (error) {
      console.error('WebSocket connection failed:', error);
    }
  }
  return socket;
};
