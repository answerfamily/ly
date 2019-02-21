const fbPromise = (window.FB
  ? Promise.resolve(window.FB)
  : new Promise(resolve => {
      window.fbAsyncInit = () => {
        resolve(window.FB);
      };
    })
).then(FB => {
  FB.init({
    appId: process.env.REACT_APP_FB_ID,
    version: 'v3.2',
  });
  return FB;
});

export default fbPromise;
