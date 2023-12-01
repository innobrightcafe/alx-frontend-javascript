const getResponseFromAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("API response data");
      } else {
        reject("API request failed");
      }
    }, 1000);
  });
};

export default getResponseFromAPI;
