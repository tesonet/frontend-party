import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import * as loggedPageActions from '../../store/actions/index';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';

class LoggedPage extends Component {

    state = {
        data: []
   }

    logout = () => {
        this.props.history.push("/");
        localStorage.clear();
      };

    componentDidMount () {

        this.props.onInitGetResult();
        console.log(this.props.results);
        // Ascending order by  distance
        // this.props.results.data.sort((a,b) => (b.distance > a.distance) ? 1 : ((a.distance > b.distance) ? -1 : 0));
        // // Ascending order by name
        // this.props.results.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        // // Loppinng in array and posting table cells one by one
        // for (let i = 0; i < this.props.results.data.length; i++) {
        //         $('.table-results').append('<tr><td class="table-results-left">' + this.props.results.data[i].name + '</td><td class="table-results-right">' + this.props.results.data[i].distance + ' Km</td></tr>');
            
        // }; 

        // Get token from local storage
        const token = localStorage.getItem('token');
        const url = 'http://playground.tesonet.lt/v1/servers';

        axios({
            method: 'GET',
            url: url,
            headers: { "Authorization": token, 'content-type': 'application/json;' }            
        }).then(response => {

            console.log(response.data);

            this.setState({ data: response.data})
            // Ascending order by  distance
            this.state.data.sort((a,b) => (b.distance > a.distance) ? 1 : ((a.distance > b.distance) ? -1 : 0));
            // Ascending order by name
            this.state.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            // Loppinng in array and posting table cells one by one
            for (let i = 0; i < this.state.data.length; i++) {
                 $('.table-results').append('<tr><td class="table-results-left">' + this.state.data[i].name + '</td><td class="table-results-right">' + this.state.data[i].distance + ' Km</td></tr>');
               
            };          
        }).catch(error => {
            console.log('error loading data');
        });        
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

const mapStateToProps = state => {
    return {
        results: state.data,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {        
        onInitGetResult:  () => dispatch(loggedPageActions.getResult())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedPage);
