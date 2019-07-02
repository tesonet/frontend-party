import React from 'react'
import { inject, observer } from 'mobx-react'
import { Wrapper, Navigation, Table, Loading } from './styled'
import Logo from '../../Assets/blueLogo.svg'
import { ReactComponent as IconLogout } from '../../Assets/IconLogout.svg'

const url = 'http://playground.tesonet.lt/v1/servers'

export default @inject('app')@observer class LoggedIn extends React.Component {
    state = {
        servers: [],
        nameReverse: false,
        distReverse: false
    }

    componentWillMount() {
        fetch(url, {
            headers: {
                "content-type": "application/json; charset=UTF-8",
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
            method: "GET"
        }).then(data => data.json())
            .then(res => !res.message ?
                (this.setState({servers: res}), this.props.app.stopLoad())
                : this.props.history.push('/login'))
            .catch(error => { console.log(error) })
    }

    logout = () => {
        this.props.app.logOut();
        this.props.history.push('/login')
    }

    sortServers = () => {
        const { servers, nameReverse } = this.state
        let sort = servers.sort((a, b) => nameReverse ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
            this.setState({
                servers: sort,
                nameReverse: !nameReverse
            })
    }

    sortDistance = () => {
        const { servers, distReverse } = this.state
        this.setState({
            servers: servers.sort((a, b) => distReverse ? b.distance - a.distance : a.distance - b.distance),
            distReverse: !distReverse
        })
    }

    render() {
        const { servers } = this.state
        const { isLoading } = this.props.app
        return (
            !isLoading ?
            <Wrapper>
                <Navigation>
                    <img src={Logo} alt="logo" />
                    <button onClick={this.logout}><IconLogout /> Logout</button>
                </Navigation>
                <Table>
                    <div>
                        <span onClick={this.sortServers}>Server</span>
                        <span onClick={this.sortDistance}>Distance</span>
                    </div>
                    {servers.map((server, i) =>
                        <div key={i}>
                            <span>{server.name}</span>
                            <span>{server.distance}</span>
                        </div>
                    )}
                </Table>
            </Wrapper> :
            <Loading>
                <p>Loading...</p>
            </Loading>
        )
    }
}