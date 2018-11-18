import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        data:'',
        loaded:false
    }
    logout = ()=>{
        localStorage.removeItem('data');
        localStorage.removeItem('jwt-token');
        this.props.history.push('/login'); 
    }
    getData = ()=>{  
        let token=localStorage.getItem('jwt-token')
        console.log(token)
        if(!token){
            this.props.history.push('/login')
        }else{
            let data=localStorage.getItem('data')
            if(data){
                this.setState({data:JSON.parse(data)})
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
                                 console.log(res)
                                 localStorage.setItem('data', JSON.stringify(res));
                                 this.setState({data:res})
                             })
                            } else {
                            localStorage.removeItem('jwt-token');
                            localStorage.removeItem('data');
                            this.props.history.push('/login');
                            throw Error(`Request rejected with status ${res.status}`);      
                            }
                        }).catch((e)=>{
                            console.log(e);         
                        })
            }
                }
    }
    componentWillMount(){
        this.getData();
    }
    componentDidMount(){
        this.setState({loaded:true});
    }
    render() {
        return (
            <div>
                Home
                <button
                onClick={this.logout}
                >Logout</button>
            </div>
            
        )
    }
}
