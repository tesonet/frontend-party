import axios from 'axios';
import { baseURL } from './consts';

export default axios.create({
  baseURL,
});
