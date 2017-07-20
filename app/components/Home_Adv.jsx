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
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Dropzone from 'react-dropzone';
var request = require('superagent');
import {Redirect} from 'react-router-dom';


const styles = {
  card:{
    paddingLeft:'50px',
    paddingRight:'50px',
    paddingBottom:'50px',
  },
  dropzone:{
  },
}

const CLOUDINARY_UPLOAD_PRESET = 'testupload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/harleen14/image/upload';

class Campaign extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cname:'', adv:'', domain:'',category:'',slider:10, uploadedFile:[], url:'',
      upoadedFileCloudinaryUrl:'', redirect:false,
    };
    this.handleSlider = this.handleSlider.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSlider(event,value){
    this.setState({slider:value});
  }

  onDrop(files) {
  this.setState({uploadedFile:files[0]});
  this.handleImageUpload(files[0]);
  }

  handleImageUpload(file){
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({ uploadedFileCloudinaryUrl: response.body.secure_url});
      }
    });
  }

  handleSubmit(){
  this.setState({redirect:true});
  axios.post('http://localhost:8082/api/new_campaign',{ campaign_name:this.state.cname,
              advertiser:this.state.adv,
              land_url:this.state.url,
              domain:this.state.domain,
              budget:this.state.slider,
              })
    .then(function(res){console.log(res);})
    .catch(function(e){console.log(e);});
  }

  render(){

    if(this.state.redirect){return <Redirect to='/home' />;}

    return(
      <MuiThemeProvider>
        <div>
        <Card zDepth={1} style={styles.card}>
          <ValidatorForm ref="campaign_form" onSubmit={this.handleSubmit} instantValidate={true}>

            <TextValidator name="campaign_name" value={this.state.cname}
            floatingLabelText = "Campaign Name"
            onChange={(event,value) => this.setState({cname:value})}
            validators={['required']}
            errorMessages={['This field is required']} /> <br/>

            <TextValidator name="advertiser" value={this.state.adv}
            floatingLabelText = "Advertiser"
            onChange={(event,value) => this.setState({adv:value})}
            validators={['required']}
            errorMessages={['This field is required']} /> <br/>

            <TextValidator name="landingURL" value={this.state.url}
            floatingLabelText = "Landing URL " hintText = "http://www.abc.com"
            onChange={(event,value) => this.setState({url:value})}
            validators={['required']}
            errorMessages={['This field is required']} /> <br/>

            <TextValidator name="advDomain" value={this.state.domain}
            floatingLabelText = "Advertiser's Domain " hintText = "Website, Google Play or App Store URL"
            onChange={(event,value) => this.setState({domain:value})}
            validators={['required']} rows={2}
            errorMessages={['This field is required']} /> <br/>

            <SelectValidator name="category" validators={['required']} multiple={true}
                          errorMessages={['This field is required']} floatingLabelText="Campaign Category"
                        value={this.state.category}
                          onChange={(event,index,value)=>this.setState({category:value})}>
              <MenuItem value='arts' primaryText="Arts" />
              <MenuItem value='music' primaryText="Music" />
              <MenuItem value='books' primaryText="Books" />
            </SelectValidator> <br/>
            <p>Daily Budget: {this.state.slider}$</p>
            <Slider
              min={0}
              max={100}
              step={0.5}
              value={this.state.slider}
              onChange={this.handleSlider}
              width={50}
            />
            <Dropzone accept="image/*" onDrop={(files) => this.onDrop(files)}
              multiple={false}>
              <p> Drop the creatives here, or click to select files for upload. </p>
            </Dropzone>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />

            <RaisedButton label="Submit" primary={true} type="submit" />


          </ValidatorForm>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

class Home extends React.Component{
  render(){
    return(<h1> hey </h1>);
  }
}


class Home_Adv extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <BrowserRouter>
      <MuiThemeProvider>
      <div>
        <AppBar title = "Welcome" zDepth={1}
          iconElementLeft={<IconMenu touchTapCloseDelay={0}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          iconButtonElement={<IconButton> <Menu /> </IconButton>}>
            <Link to='/home'> <MenuItem primaryText="Home" /> </Link>
            <Link to='/campaign'> <MenuItem primaryText="New Campaign" /> </Link>
            <Link to='/inventory'> <MenuItem primaryText="Inventory" /> </Link>
            </IconMenu> }
          /> <br/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/campaign" component={Campaign} />
      </div>
      </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
export default Home_Adv;
