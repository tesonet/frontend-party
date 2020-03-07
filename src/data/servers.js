const getServers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ name: 'server 1' }]);
      // reject("error error error");
    }, 1000);
  });
};

export default {
  getServers
};
