import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import ContactCard from "./Components/ContactCard/ContactCard";
import Decrement from "./Components/Decrement/Decrement";
import Form from "./Components/Form/Form";
import Folder from "./Components/Folder/Folder";
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
              Folder
            </Typography>
          </div>
          <div className = "Edit">
            <Folder/>
          </div>
          
        </div>

      );
  }
}


export default App;
