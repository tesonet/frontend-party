import React, { Component } from 'react'
import {LogOut} from '../styled-components/LogOut';
import {Errors} from '../styled-components/Errors';
import {LogoHome} from '../styled-components/LogoHome';
import LogoHmFile from '../assets/img/logo2.png';
import {HomeContainer} from '../styled-components/HomeContainer';
import {Nav} from '../styled-components/Nav';
import {NavItem} from '../styled-components/NavItem';
import {ListWrapper} from '../styled-components/ListWrapper';
import {ListRow} from '../styled-components/ListRow';
import {ListItem} from '../styled-components/ListItem';
import { ListHeader } from '../styled-components/ListHeader';
import { Loader } from '../styled-components/Loader';
import { ClipLoader } from 'react-spinners';
export default class Home extends Component {
    state = {
        errors:{},
        data:[],
        loading:false
    }
    logout = ()=>{
        localStorage.removeItem('data');
        localStorage.removeItem('jwt-token');
        this.props.history.push('/login'); 
    }
    getData = ()=>{  
        let token=localStorage.getItem('jwt-token')

        if(!token){
            this.props.history.push('/login')
        }else{
            let data=localStorage.getItem('data')
            if(data){
                this.setState({data:JSON.parse(data),loading:false})
            }else{
                let config = {
                    method: 'GET',
                    headers: { 'authorization':token}
                }
                    // request to http://playground.tesonet.lt/v1/servers
                    fetch('http://playground.tesonet.lt/v1/servers', config).then(
                        res=>{
                            if(res.ok) {
                             res.json().then(res=>{
                                 localStorage.setItem('data', JSON.stringify(res));
                                 this.setState({data:res, loading:false})
                                 
                             })
                            } else {
                            localStorage.removeItem('jwt-token');
                            localStorage.removeItem('data');
                            this.props.history.push('/login');
                            throw Error(`Request rejected with status ${res.status}`); 
                                 
                            }
                        }).catch((e)=>{
                            this.setState({loading:false,errors:{data:'failed to load data'}})
                            console.log(e);         
                        })
            }
                }
    }

    componentDidMount(){
        this.setState({ loading: true });
        this.getData();
    }
    render() {
        const list= this.state.data.map((val, i)=>{
            return (
                <ListRow key={i} className="row">
                    <ListItem  className="col-6" side='flex-start'>{val.name}</ListItem>
                    <ListItem  className="col-6" side='flex-end'>{val.distance}</ListItem>
                </ListRow>
            )
        })
            
        return (
            <HomeContainer>
                <Nav className="row">
                    <NavItem className="col-6" side='flex-start'>
                    <LogoHome src={LogoHmFile}></LogoHome>
                    </NavItem>
                    <NavItem className="col-6" side='flex-end'>
                    <LogOut
                    onClick={this.logout}>
                    Logout
                    </LogOut>
                    </NavItem>
                </Nav>
                <ListWrapper>
                {this.state.errors.data&&<Errors>{this.state.errors.data}</Errors>}
                    <Loader>
                        <ClipLoader loading={this.state.loading} color="red"/>
                    </Loader>
                    <ListHeader className="row">
                        <ListItem  className="col-6" side='flex-start'>server</ListItem>
                        <ListItem  className="col-6" side='flex-end'>distance</ListItem>
                    </ListHeader>
                {list}  
                </ListWrapper>
            </HomeContainer>  
        )
    }
}
