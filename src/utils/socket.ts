// utils/socket.js
let socket = null;

export const getWebSocket = () => {
  if (!socket || socket.readyState === WebSocket.CLOSED || socket.readyState === WebSocket.CLOSING) {
    try {
      socket = new WebSocket('http://193.203.161.214:9001');
    } catch (error) {
      console.error('WebSocket connection failed:', error);
    }
  }
  return socket;
};
