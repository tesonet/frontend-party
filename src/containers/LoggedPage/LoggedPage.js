import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loggedPageActions from '../../store/actions/index';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';


class LoggedPage extends Component {

    logout = () => {        
        localStorage.clear();
        this.props.onLogout();
    };

    componentDidMount () {
        this.props.onInitGetResult();     
    }    

    render () {
               
        return (
            <>
                <section className="logged" >
                    <Header onClick={this.logout}/>
                    <Table/>
                </section>
            </>            
        );           
    }

}

const mapDispatchToProps = dispatch => {
    return {        
        onInitGetResult: () => dispatch(loggedPageActions.getResult()),
        onLogout: () => dispatch(loggedPageActions.logOut())
    };
}

export default connect(null, mapDispatchToProps)(LoggedPage);
