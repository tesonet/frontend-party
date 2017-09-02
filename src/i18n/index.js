import i18next from 'i18next';

import {setup} from './translations';


const init = () => {
  setup();
};

const t = (...args) => i18next.t(...args);


export default {init, t};
