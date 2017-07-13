var React = require('react');
var ReactDOM = require('react-dom');
import Main from './Main.jsx';
import Advertiser from './components/Advertiser.jsx';
import Publisher from './components/Publisher.jsx';
import Home_Adv from './components/Home_Adv.jsx';
import Home_Pub from './components/Home_Pub.jsx';
import Register_Adv from './components/Register_Adv.jsx';
import Register_Pub from './components/Register_Pub.jsx';
import {BrowserRouter,Switch,Route,browserHistory} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = '/' component={Main} />
      <Route exact path = '/advertiser' component={Advertiser} />
      <Route exact path = '/publisher' component={Publisher} />
      <Route exact path = '/home_adv' component={Home_Adv} />
      <Route exact path = '/home_pub' component={Home_Pub} />
      <Route exact path = '/register_adv' component={Register_Adv} />
      <Route exact path = '/register_pub' component={Register_Pub} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
