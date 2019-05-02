console.log('inside notifier!');

setTimeout(() => {
  self.registration.showNotification('Hello from notifier');
}, 10000);