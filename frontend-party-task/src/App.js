import React from 'react'
import { Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Login from './Components/Login'
import LoggedIn from './Components/LoggedIn'

export default @inject('app')@observer class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={LoggedIn}/>
                <Route exact path='/login' component={Login}/>
            </div>
        );
    }

}