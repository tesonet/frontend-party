import React from 'react';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Template Parts
import Header from '/ui/template/headers/DashboardHeader';

const DashboardLayout = (PageComponent) => {
    return class extends React.Component {
        render() {
            return (
                <div className={css(styles.dashboard)}>
                    <Header />
                    <PageComponent {...this.props}/>
                </div>
            );
        }
    }
};

export default DashboardLayout;


const styles = StyleSheet.create({
    dashboard: {
        width: '100%',
        height: '100%',
    },
});
