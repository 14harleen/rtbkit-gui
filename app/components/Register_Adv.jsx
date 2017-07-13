var React = require('react');
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Country from './Country.jsx';
import CountryCode from './CountryCode.jsx';
import Nationality from './Nationality.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import axios from 'axios';
import { ValidatorForm, TextValidator, SelectValidator, DateValidator} from 'react-material-ui-form-validator';
import {Link, Redirect} from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fname:'',mname:'',lname:'',gender:'',date:'',age:'',mobile:'',
      add1:'',add2:'',city:'',state:'',pin:'',nationality:'',count_code:'', country:'',redirect:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeNationality = this.changeNationality.bind(this);
    this.changeCountryCode = this.changeCountryCode.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
  }

changeCountry(value){
  this.setState({countryc:value});
}

changeNationality(value){
  this.setState({nationality:value});
}

changeCountryCode(value){
  this.setState({count_code:value});
}

  handleSubmit(e) {
    e.preventDefault();
    this.setState({redirect:true});

    axios.post('http://localhost:8081/api/insert',{firstname:this.state.fname,middlename:this.state.mname,
                lastname:this.state.lname,
                gender:this.state.gender,
                nationality:this.state.nationality,
                dob:this.state.date,
                age:this.state.age,
                country_code:this.state.count_code,
                mobile:this.state.mobile,
                address1:this.state.add1, address2:this.state.add2,
                city:this.state.city, state:this.state.state, pin:this.state.pin,
                country:this.state.country,
                })
      .then(function(res){console.log(res);})
      .catch(function(e){console.log(e);});
}

 render() {
 if(this.state.redirect){
   return <Redirect to="/submit" />;
 }

    return (
      <MuiThemeProvider>
       <div>

        <AppBar zDepth={1} title="Register" showMenuIconButton={false}/>

        <Card zDepth={1}>
        <ValidatorForm ref="form" onSubmit={this.handleSubmit} instantValidate={true}>

        <TextValidator
          name="fname"
          value={this.state.fname}
          floatingLabelText = "First Name"
          onChange={(event,value) => this.setState({fname:value})}
          validators={['required']}
          errorMessages={['This field is required']} />
        <TextField
          value={this.state.mname}
          floatingLabelText="Middle Name"
          onChange={(event,value)=>this.setState({mname:value})} />
        <TextField
          value={this.state.lname}
          floatingLabelText="Last Name"
          onChange={(event,value)=>this.setState({lname:value})} />

        <SelectValidator name="gender" validators={['required']} errorMessages={['This field is required']}
                      floatingLabelText="Gender" value={this.state.gender}
                      onChange={(event,index,value)=>this.setState({gender: value})}>
          <MenuItem value='female' primaryText="Female" />
          <MenuItem value='male' primaryText="Male" />
          <MenuItem value='other' primaryText="Other" />
        </SelectValidator>

        <Nationality callback={this.changeNationality} nation={this.state.nationality}/>

        <DatePicker onChange={(event,value)=>this.setState({date:value})}
                    autoOk={true} container="inline" mode="landscape" floatingLabelText="Date Of Birth" />

        <TextValidator
          name="age"
          value={this.state.age}
          validators={['required','isNumber','isPositive']} errorMessages={['This field is required','Invalid','Invalid']}
          floatingLabelText="Age"
          onChange={(event,value)=>this.setState({age:value})} />

        <CountryCode callback={this.changeCountryCode} cc={this.state.count_code}/>

        <TextValidator name="mobile" validators={['required','isNumber']} errorMessages={['This field is required','Invalid']}
                             value={this.state.mobile}
                             onChange={(event,value)=>this.setState({mobile:value})} floatingLabelText="Mobile No." />

        <TextValidator name="add1" validators={['required']} errorMessages={['This field is required']}
                              value={this.state.add1}
                              onChange={(event,value)=>this.setState({add1:value})} floatingLabelText="Address Line 1"/>
        <TextValidator name="add2" validators={['required']} errorMessages={['This field is required']}
                              value={this.state.add2}
                              onChange={(event,value)=>this.setState({add2:value})} floatingLabelText="Address Line 2" />
        <TextValidator name="city" validators={['required']} errorMessages={['This field is required']}
                              value={this.state.city}
                              onChange={(event,value)=>this.setState({city:value})} floatingLabelText="City/Village/Place" />
        <TextValidator name="state" validators={['required']} errorMessages={['This field is required']}
                             value={this.state.state}
                             onChange={(event,value)=>this.setState({state:value})} floatingLabelText="State" />
        <TextValidator name="pin" validators={['required','isNumber']} errorMessages={['This field is required','Invalid']}
                              value={this.state.pin}
                              onChange={(event,value)=>this.setState({pin:value})} floatingLabelText="Pin" />

        <Country callback={this.changeCountry} c1={this.state.country}/>


        <RaisedButton label="Submit" type="submit" primary={true}/>


        </ValidatorForm>

        </Card>
       </div>
       </MuiThemeProvider>
      );

 }
}

export default App;
