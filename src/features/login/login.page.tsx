import 'normalize.css';
import LoginForm from './form/form';
import logo from 'resources/svg/logo.svg';
import React from 'react';
import styles from './Login.module.scss';
import { authStore } from '../authentication/store';
import { Provider } from 'mobx-react';
import { routeStore } from 'routing/store';
import { SvgImage } from 'common/icon';

export class LogInPage extends React.Component {

	public componentDidMount() {
		if (authStore.isLoggedIn) {
			routeStore.changeRouteToDefault();
		}
	}

	public render() {
		return (
			<Provider authStore={authStore}>
				<div className={styles.background}>
					<SvgImage path={logo} width={246} height={64} className={styles.logo} />
					<LoginForm />
				</div>
			</Provider>
		);
	}
}
