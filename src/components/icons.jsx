import React from 'react';
import { string, object } from 'prop-types';

import styles from './icons.less';

const Icon = ({ style, name }) => (
    <i
        className={styles.base}
        style={style}
    >
        {name}
    </i>
);


Icon.propTypes = {
    style: object,
    name: string
};

export default Icon;
