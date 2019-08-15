import React from 'react';

class RegisterServiceWorker extends React.PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js', { scope: '/' })
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }

  render() {
    return null;
  }
}

export default RegisterServiceWorker;
