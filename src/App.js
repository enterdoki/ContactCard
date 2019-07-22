import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import ContactCard from "./Components/ContactCard/ContactCard";
import Decrement from "./Components/Decrement/Decrement";
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
            <ContactCard name = "Tom Chen" number = "646-112-1234" email = "ymmot925@gmail.com"></ContactCard>
            <ContactCard name = "Billey" number = "646-131-4563" email = "johnsmith@gmail.com"></ContactCard>
            <ContactCard name = "Sam" number = "646-999-1235" email = "johndoe@gmail.com"></ContactCard>
            <Decrement number = "10"></Decrement>
          </div>
          
        </div>

      );
  }
}


export default App;
