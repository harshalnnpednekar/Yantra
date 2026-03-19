import { useEffect, useRef, useState, useCallback } from 'react';
import { io } from 'socket.io-client';

const useWebSocket = (url) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io(url || window.location.origin, {
      path: '/socket.io',
      reconnectionAttempts: 5,
      reconnectionDelay: 3000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('WS Connected');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('WS Disconnected');
      setIsConnected(false);
    });

    socket.on('message', (data) => {
      setLastMessage(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [url]);

  const sendMessage = useCallback((event, data) => {
    if (socketRef.current) {
      socketRef.current.emit(event, data);
    }
  }, []);

  return { isConnected, lastMessage, sendMessage };
};

export default useWebSocket;
