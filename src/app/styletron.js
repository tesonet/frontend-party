import { once } from 'ramda';
import Styletron from 'styletron-client';

export default once(() => {
  const styleSheet = document.createElement('style');
  document.head.appendChild(styleSheet);
  return new Styletron([styleSheet]);
});
