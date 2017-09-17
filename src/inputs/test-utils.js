import {ThemeProvider} from 'styled-components';
import {withProps} from 'recompose';

import {theme} from '~/app/style';


export const ThemeContainer = withProps({theme})(ThemeProvider);
