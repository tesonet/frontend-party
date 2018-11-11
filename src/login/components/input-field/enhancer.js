import { compose, mapProps } from 'recompose';
import { injectIntl } from 'react-intl';

export default compose(
    injectIntl,
    mapProps(({ placeholder, intl, ...rest }) => ({
        placeholder: intl.formatMessage(placeholder),
        ...rest
    })),
);
