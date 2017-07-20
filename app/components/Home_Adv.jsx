var React = require('react');
import RaisedButton from 'material-ui/RaisedButton';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import { ValidatorForm, TextValidator, SelectValidator, DateValidator} from 'react-material-ui-form-validator';
import SelectField from 'material-ui/SelectField';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import Slider from 'material-ui/Slider';
import axios from 'axios';


class Campaign extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cname:'', adv:'', domain:'',category:'',slider:'50',gender:'',date:'',age:'',mobile:'',
    };
    this.handleSlider = this.handleSlider.bind(this);
  }

  handleSlider(event,value){
    this.setState({slider:value});
  }

  render(){
    return(
      <MuiThemeProvider>
        <div>
          <ValidatorForm ref="campaign_form" instantValidate={true}>

            <TextValidator name="campaign_name" value={this.state.cname}
            floatingLabelText = "Campaign Name"
            onChange={(event,value) => this.setState({cname:value})}
            validators={['required']}
            errorMessages={['This field is required']} />

            <TextValidator name="advertiser" value={this.state.adv}
            floatingLabelText = "Advertiser"
            onChange={(event,value) => this.setState({adv:value})}
            validators={['required']}
            errorMessages={['This field is required']} />

            <TextValidator name="landingURL" value={this.state.url}
            floatingLabelText = "Landing URL " hintText = "http://www.abc.com"
            onChange={(event,value) => this.setState({url:value})}
            validators={['required']}
            errorMessages={['This field is required']} />

            <TextValidator name="advDomain" value={this.state.domain}
            floatingLabelText = "Advertiser's Domain " hintText = "Website, Google Play or App Store URL"
            onChange={(event,value) => this.setState({domain:value})}
            validators={['required']}
            errorMessages={['This field is required']} />

            <SelectValidator name="category" validators={['required']}
                          errorMessages={['This field is required']} floatingLabelText="Campaign Category"
                        value={this.state.category} multiple={true}
                          onChange={(event,index,value)=>this.setState({category:value})}>
              <MenuItem value='arts' primaryText="Arts" />
              <MenuItem value='music' primaryText="Music" />
              <MenuItem value='books' primaryText="Books" />
            </SelectValidator>
            <h3>Daily Budget</h3>
            <Slider
              min={0}
              max={100}
              step={0.5}
              value={this.state.slider}
              onChange={this.handleSlider}
            />





          </ValidatorForm>
        </div>
      </MuiThemeProvider>
    );
  }
}


class Home_Adv extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <MuiThemeProvider>
      <div>
        <Link to='/campaign'> <RaisedButton label="New Campaign" secondory={true} /> </Link>
        <Route exact path="/campaign" component={Campaign} />
      </div>
      </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
export default Home_Adv;
