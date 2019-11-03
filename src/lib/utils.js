
const getLocalUserToken = () => {
    return localStorage.getItem('userToken');
};


export {
    getLocalUserToken,
}
