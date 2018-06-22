import React, { Component } from 'react';
import Button from '../Components/Button';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id="quote-box" className="App">
        <div id="text">Life is what happens to you while you’re busy making other plans.</div>
        <div id="author">- John Lennon</div>
        <div className="actions">
          <Button id="tweet-quote">Tweet</Button>
          <Button id="new-quote" color="#0E94D3">New Quote</Button>
        </div>
      </div>
    )
  }
}