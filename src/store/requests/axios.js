import axios from 'axios';
import { baseURL } from '../../utility/consts';

export default axios.create({
  baseURL,
});
