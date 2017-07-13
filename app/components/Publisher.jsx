var React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link, Redirect} from 'react-router-dom';


const styles = {
  card:{
    marginLeft:'35%',
    marginRight:'35%',
    marginTop:'10%',
    textAlign:'center',
  },
  button:{
    marginBottom:'20px',
    marginTop:'20px',
    height:'60px',
    width:'100px',
    textAlign:'center',
    fontSize:'40px',
  }
}


class Publisher extends React.Component{
  constructor(props){
    super(props);
    this.state={uname:'', pass:'', redirect:false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.setState({redirect:true});
  }

  render(){
    return(
      <MuiThemeProvider>
        <div>
          <Card style={styles.card}>
            <CardTitle title="Login!" />
            <ValidatorForm ref="form" onSubmit={this.handleSubmit} instantValidate={true}>

              <TextValidator name="username" value={this.state.uname}
              floatingLabelText = "User Name"
              onChange={(event,value) => this.setState({uname:value})}
              validators={['required']}
              errorMessages={['This field is required']} />

              <TextValidator name="password" value={this.state.pass} type="password"
              floatingLabelText = "Password"
              onChange={(event,value) => this.setState({pass:value})}
              validators={['required']}
              errorMessages={['This field is required']} />

            <CardActions>
              <RaisedButton type="submit" style={styles.button} label="Login" primary={true} />
              <Link to='/register_pub'> <RaisedButton style={styles.button} label="Register" primary={true} /> </Link>
            </CardActions>
            </ValidatorForm>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Publisher;
