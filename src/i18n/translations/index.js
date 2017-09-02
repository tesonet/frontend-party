import i18next from 'i18next';

import {DEFAULT_LANGUAGE, FALLBACK_LANGUAGE} from '../constants';
import en from './en';


const languages = {
  en: {translation: en},
};

export const setup = () => {
  const options = {
    lng: DEFAULT_LANGUAGE,
    resources: languages,
  };
  if (process.env.NODE_ENV === 'production') options.fallbackLng = FALLBACK_LANGUAGE;
  i18next.init(options);
};
