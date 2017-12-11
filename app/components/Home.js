import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Deal from './Deal';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      deals: [],
      query: ''
    }
  }

  search(){
    console.log(this.state.query);
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
    fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({deals: json.items});
      })
  }

  render() {
    const dealsList = this.state.deals.map((val, index) => {
      return <Deal key={index} value={val} />;
    })

    return (
      <div className="container">
        <h1>Books Finder</h1>

        <input type="text"
          onKeyPress={event => { if (event.key == 'Enter'){ this.search() } } }
          onChange={event => this.setState({query: event.target.value})} className="form-control" />

        <ul>
          {dealsList}
        </ul>
      </div>
    );
  }
}
