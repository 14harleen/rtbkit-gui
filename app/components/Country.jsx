var React = require('react');
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {grey600} from 'material-ui/styles/colors'
import { ValidatorForm,SelectValidator} from 'react-material-ui-form-validator';

const items = ['Afghanistan','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica (Australian bases)',
              'Antigua and Barbuda','Argentina','Armenia','Aruba','Ascension','Australia','Austria','Azerbaijan',

              'Bahamas, The','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize',
              'Benin','Bermuda','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','British Indian Ocean Territory',
              'British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burma','Burundi',

              'Cambodia','Cameroon','Canada','Cabo Verde','Cayman Islands','Central African Republic','Chad','Chile','China',
              'Colombia','Comoros','Congo, Democratic Republic of the','Congo, Republic of the','Cook Islands','Costa Rica',
              'Cote d Ivoire','Croatia','Cuba','Curacao','Cyprus','Czechia',

              'Denmark','Djibouti','Dominica','Dominican Republic',

              'East Timor (see Timor-Leste)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia',

              'Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia',

              'Gabon','Gambia, The','Gaza Strip','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada',
              'Guadeloupe','Guam','Guatemala','Guinea','Guinea-Bissau','Guyana',

              'Haiti','Honduras','Hong Kong','Hungary',

              'Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy',

              'Jamaica','Japan','Jordan',
              'Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan',
              'Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg',
              'Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique',
              'Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat',
              'Morocco','Mozambique','Myanmar',

              'Namibia','Nauru','Nepal','Netherlands','New Zealand','Netherlands Antilles','New Caledonia','Nicaragua','Niger',
              'Nigeria','Niue','Norfolk Island','North Korea','Northern Ireland','Northern Mariana Islands','Norway',
              'Oman',
              'Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico',
              'Qatar',
              'Romania','Russia','Rwanda',

              'Saint-Barthélemy','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Martin (French side)',
              'Saint Pierre and Miquelon','Saint Vincent and the Grenadines',
              'Samoa', 'Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore',
              'Sint Maarten',
              'Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka',
              'Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria',

              'Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey',
              'Turkmenistan','Turks and Caicos Islands','Tuvalu',
              'Uganda','Ukraine','United Arab Emirates','United Kingdom','United States of America','Uruguay','Uzbekistan',
              'Vanuatu','Venezuela','Vietnam',
              'Wallis and Futuna','West Bank',
              'Yemen','Zambia','Zimbabwe'];
const listitems = items.map((items)=><MenuItem value={items} primaryText={items} /> );


class Country extends React.Component{
  constructor(props){
    super(props);
    this.state={country:props.c1}
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event,index,value){
  this.setState({country:value});
  this.props.callback(value);
}
  render(){
    return(
    <div className="country">
      <SelectValidator name="country" floatingLabelText="Country"
                       value={this.state.country} onChange={this.handleChange}>
        {listitems}

      </SelectValidator> <br/> <br />
    </div>
    );
  }
}
export default Country;
