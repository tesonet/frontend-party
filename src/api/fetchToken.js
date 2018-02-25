import postData from '../lib/postData';

const URL = 'http://playground.tesonet.lt/v1/tokens';

export default data => postData(URL, data);
