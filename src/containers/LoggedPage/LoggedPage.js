import React, { Component } from 'react';
import $ from 'jquery';

class LoggedPage extends Component {

    logout = () => {
        this.props.history.push("/");
        localStorage.clear();
      };

    componentDidMount () {
        // Get token from local storage
         const tokenas = localStorage.getItem('tokenas');

        $.ajax({
            type: 'GET',
            url: 'http://playground.tesonet.lt/v1/servers',
            headers: { "Authorization": tokenas },
            success: function (result){
                let array = result;
                // Ascending order by  distance
                array.sort((a,b) => (b.distance > a.distance) ? 1 : ((a.distance > b.distance) ? -1 : 0));
                // Ascending order by name
                array.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                // Loppinng in array and posting table cells one by one
                for (let i = 0; i < array.length; i++) {
                    $('.table-results').append('<tr><td class="table-results-left">' + array[i].name + '</td><td class="table-results-right">' + array[i].distance + ' Km</td></tr>');
                };
            },
            // Caching the error
            error : function (req, status, error) {
                console.log('error loading data');
                }
        });
    }
    

    resizeMenuOnScrool = () => {
        //Meniu resizing on scroll
        $(document).on("scroll", function() {
            if ($(document).scrollTop() > 50) {
                $(".logged-header-top").addClass("logged-header-top-small");

            } else {
                $(".logged-header-top").removeClass("logged-header-top-small");
            }
        });
    }    

    render () {
        this.resizeMenuOnScrool();
        return (
                <section className="logged" >
                    <div className="logged-header">
                        <div className="row logged-header-top ">
                            <div className="col-sm">
                                <div className="logged-header-top-left">
                                    <img src="/assets/testio-logo-dark-blue.png" alt="logo"></img>
                                </div>
                            </div>
                            <div className="col-sm logged-header-top-div">
                                <div className="logged-header-top-right">
                                    <div className="logged-header-top-right-box" onClick={this.logout}>
                                        <img src="/assets/logout-icon.png" alt="logo"></img>
                                        <span>Logout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row logged-header-bottom">
                            <div className="col logged-header-bottom-left">
                                <span>Server</span>
                            </div>
                            <div className="col logged-header-bottom-right">
                                <span>Distance</span>
                            </div>
                        </div>
                    </div>
                    <table className="table table-hover">
                        <tbody className="table-results"></tbody>
                    </table>
                </section>
            );           
    }
    
}

export default LoggedPage;
