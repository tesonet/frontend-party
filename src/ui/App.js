import React from 'react';

// React router
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

// Pages

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={() => (
                            <div>
                                <h1>Hello Tesonet</h1>
                            </div>
                        )}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
