import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/testio_color.png';

const NotFound = () => (
    <section className="not-found">
        <div className="not-found__container">
            <img src={logo} alt="Logo" className="not-found__image" />
            <h2 className="not-found__title">Ooops.</h2>
            <p className="not-found__description">
                The page you are loooking for does not exist
            </p>
            <Link to="/" className="not-found__link">
                Back to application
            </Link>
        </div>
    </section>
);

export default NotFound;
