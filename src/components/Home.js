import React, { Component } from 'react';
import Spinner from './Spinner/Spinner';
import M from 'materialize-css';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import csv from 'csv';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  onDrop = (files) => {

    this.setState({ files, isLoading: true });
    const file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      csv.parse(reader.result, (err, data) => {

        const burgerList = [];
        let count = 0;
        for (let i = 0; i < data.length; i++) {
          const name = data[i][0];
          const size = data[i][1];
          const price = data[i][2];
          const newBurger = { "Name": name, "Size": size, "Price": price };
          burgerList.push(newBurger);
          count += 1;
          axios.post(`${process.env.REACT_APP_DATABASE_URL}/burgers.json`, newBurger, {
              headers: {
                'Content-Type': 'application/json',
            } 
          }).catch(error => {
            console.log(error);
          });

        };
        if (count === data.length) {
          this.setState({ isLoading: false });
          M.toast({html: 'Uploaded Successfully!', classes:"#43a047 green darken-1"});
        }
      });
    };

    reader.readAsBinaryString(file);
  }

  render() {

    const fontSize = 5;
    
    let display = (
      <div align="center" onContextMenu={() =>  false}>
        <br /><br /><br />
        <Dropzone accept=".csv" onDropAccepted={this.onDrop}>            
        </Dropzone>
        <br /><br /><br />
        <h4>Upload or drop your <font size={fontSize} color="#00A4FF">CSV</font><br /> file here</h4>
      </div>
    );
    if (this.state.isLoading) {
      display = <Spinner />;
    }

    return (
      <div>
        {display}
      </div>
    )
  }
}

export default Home;