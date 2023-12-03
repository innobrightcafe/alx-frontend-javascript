const getResponseFromAPI = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve('API response data');
    } else {
      reject(new Error('Something went wrong - error '));
    }
  }, 1000);
});

export default getResponseFromAPI;
