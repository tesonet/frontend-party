import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/images/404-yoda.png';
import Button from '../components/Button';

const Page404 = () => {
	return (
		<div className="notFound">
			<img src={notFound} className="notFound__img" alt="404 PAGE NOT FOUND" />
			<Link to="/" className="notFound__link">
				<Button
					className={'btn btn--green'}
					text={'Go back'}
					style={{ width: '15rem' }}
				/>
			</Link>
		</div>
	);
};

export default Page404;
