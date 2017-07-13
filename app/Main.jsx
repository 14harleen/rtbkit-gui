var React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
    height:'320px',
  },
  button:{
    marginBottom:'20px',
    marginTop:'20px',
    height:'60px',
    width:'200px',
    textAlign:'center',
    fontSize:'40px',
  }
}


class Main extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <Card style={styles.card}>
            <CardTitle title="Welcome!" />
            <CardActions>
              <Link to='/advertiser'> <RaisedButton style={styles.button} label="Advertiser" primary={true} /> </Link>
              <Divider />
              <Link to='/publisher'> <RaisedButton style={styles.button} label="Publisher" primary={true} /> </Link>
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Main;
