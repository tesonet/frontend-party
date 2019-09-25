import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import image from '../../assets/images/cat.png';
import './Page404.scss';

const Page404 = ({ history }) => {
    const handleClick = () => {
        history.push('/');
    };

    return (
        <div className="page">
            <h1 className="page__header">OOPS!</h1>
            <p>The page that you are looking for does not exist :(</p>
            <button className="page__button" type="button" onClick={handleClick}>
                Go Home
            </button>
            <img className="page__image" alt="notfound" src={image} />
        </div>
    );
};

Page404.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withRouter(Page404);
