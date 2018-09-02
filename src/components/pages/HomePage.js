import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import Logo from '../../styles/Logo';




class LoginPage extends React.Component{

    submit = data => this.props.login(data).then(()=> this.props.history.push("/"));

    

    render(){         

        const Padding = {
            paddingTop : "10%"
        }



        return(
          
        <div style = {Padding}>    
            <div className = "ui middle aligned grid child">
                 <div className = "column">
                     <div className="ui center aligned page grid">
                         <div className="eight wide  column">
                            <div className="ui center aligned ">
                                <Logo/>
                                <LoginForm submit = {this.submit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  
        );
    }
}


LoginPage.propTypes = {
    history : PropTypes.shape({
            push: PropTypes.func.isRequired

    }).isRequired,
    login : PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);