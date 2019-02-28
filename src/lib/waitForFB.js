const fbPromise = (window.FB
  ? Promise.resolve(window.FB)
  : new Promise(resolve => {
      window.fbAsyncInit = () => {
        resolve();
      };
    })
).then(() => {
  window.FB.init({
    appId: process.env.REACT_APP_FB_ID,
    version: 'v3.2',
  });
});

export default fbPromise;
