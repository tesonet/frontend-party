import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as logoutPageActions from '../../store/actions/index';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import './LogoutPage.scss'

const LogoutPage = props => {

    useEffect(() => {
        props.onInitGetResult();
    }, []);

    const logout = () => {        
        localStorage.clear();
        props.onLogout();
    };
               
    return (
        <React.Fragment>
            <section className="logged" >
                <Header onClick={logout}/>
                <Table/>
            </section>
        </React.Fragment>            
    ); 
}

const mapDispatchToProps = dispatch => {
    return {        
        onInitGetResult: () => dispatch(logoutPageActions.getResult()),
        onLogout: () => dispatch(logoutPageActions.logOut())
    };
}

export default connect(null, mapDispatchToProps)(LogoutPage);
