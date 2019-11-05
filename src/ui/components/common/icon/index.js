import React from 'react';
import PropTypes from 'prop-types';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Assets
import userIcon from '/assets/images/icons/user_icon.svg';
import passwordIcon from '/assets/images/icons/password_icon.svg';
import attentionIcon from '/assets/images/icons/attention.svg';
import logoutIcon from '/assets/images/icons/logout-icon.svg';
import logoutActiveIcon from '/assets/images/icons/logout-icon-active.svg';

const images = {
    user: userIcon,
    password: passwordIcon,
    attention: attentionIcon,
    logout: logoutIcon,
    logoutActive: logoutActiveIcon,
};

export default class Index extends React.PureComponent {
    static defaultProps = {
        style: {
            width: '17px',
            height: '19px',
        }
    };

    static propTypes = {
        name: PropTypes.string.isRequired,
        style: PropTypes.object,
    };

    render() {
        const { name, style } = this.props;
        return (
            <div  className={style ? '' : css(styles.container)} style={style}>
                <img
                    src={images[name]}
                    alt={name}
                    className={css(styles.image)}
                />
            </div>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: '1px 2px 2px 1px',
        boxSizing: 'border-box',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
