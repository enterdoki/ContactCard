import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import ContactCard from "./Components/ContactCard/ContactCard";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }


  render () {
      return (
        <div className = "App">
          <div className = "Title">
            <Typography variant="h3" color="primary">
              Contact Card
            </Typography>
          </div>
          <div classname = "Contact">
            <ContactCard/>
          </div>
          
        </div>

      );
  }
}


export default App;
