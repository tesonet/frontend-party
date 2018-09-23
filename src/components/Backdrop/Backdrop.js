import React, { Fragment } from "react";
import classes from "./Backdrop.scss";

const Backdrop = () => {
	return (
		<Fragment>
			<div className={`fullscreen ${classes.Backdrop}`} />
			<div className={`fullscreen ${classes.BackgroundImage}`} />
		</Fragment>
	);
};

export default Backdrop;
