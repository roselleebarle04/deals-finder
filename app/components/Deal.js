import React from 'react';

export default class Deal extends React.Component {
  render(){
    return (
        <li>
          <h4><a href={this.props.value.saleInfo.buyLink} target="_blank">{this.props.value.volumeInfo.title}</a></h4>
          <h6>{this.props.value.volumeInfo.subtitle}</h6>
          <p>{this.props.value.volumeInfo.description}</p>
        </li>
    );
  }
}
