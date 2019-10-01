import React from 'react';
import styles from './NotFound.module.scss';
import { Button } from 'common/components/form/button/button';
import { routeStore } from 'routing/store';

export const NotFoundPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <span>The page you were looking for was not found</span>
            <Button className={styles.button} onClick={routeStore.changeRouteToDefault}>Go back to start</Button>
        </div>
    )
}
