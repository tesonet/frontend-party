const login = input => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('token');
      // reject("error error error");
    }, 1000);
  });
};

export default {
  login
};
