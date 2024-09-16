import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './storeing-data/auth.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid rgba(255, 255, 255, 0.116)',
            background: '#fff',
            color: "#333333",
            zIndex: "101",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          },
        }}
      />
      <App />
    </React.StrictMode>
  </AuthProvider>
);

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
