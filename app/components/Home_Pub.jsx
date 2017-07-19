var React = require('react');
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router-dom';

class Home_Pub extends React.Component{
  render(){
    return(
      <Link to='/campaign'> <RaisedButton label="New Campaign" primary={true} /> </Link>
    );
  }
}
export default Home_Pub;

class Campaign extends React.Component{
  render(){
    return(
      <h1> hey </h1>
    );
  }
}
