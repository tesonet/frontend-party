import React from 'react';
import countries from '../../countries.json';
import { Header, Segment, Button, Icon, Grid  } from 'semantic-ui-react'
import LogoSmall from '../../styles/LogoSmall';

class LoginPage extends React.Component{

    constructor(){
        super();
        this.state = {
            countries
        }
    }

    render(){

        let boxContainer = {
            border: "1px solid #eee",
            boxShadow: "none",
            marginTop: "24px",
            background: "#eee",
            padding: "20px",
            height: "60px",
        };

        let divStyle = {
            marginTop: "20px",
            float: "right"
          };

        let ButtonStyle = {
            background: "transparent",
            float : "right"
        }  


     const countries = this.state.countries.map((country)=> 
        <div>
            <Segment clearing>
        <Header as='h5' floated='left' color='grey'>
        <p>{country.name}</p>
        </Header>
        <Header as='h5' floated='right' color='grey'>
        <p> {country.distance}</p>
        </Header>
        </Segment>
        </div>
    
    )   


    return(

        <div>

            <Grid reversed='tablet' columns='equal'>
                <Grid.Column>
                    <LogoSmall/>
                </Grid.Column>
                <Grid.Column  style={divStyle}>
            <Button icon labelPosition='left' style={ButtonStyle}>
                    <Icon name='log out' />
                        Log out
                    </Button>
            </Grid.Column>
        </Grid>

                 <div>
                 <Segment clearing style={boxContainer}>
                  <Header as='h5' floated='left'color='grey'>
                  Server 
                </Header>
                 <Header as='h5' floated='right'color='grey'>
                   Distance
                 </Header>
                </Segment>
                 {countries}
                 </div>
            </div>
        );
    }
}




export default LoginPage;