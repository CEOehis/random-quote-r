import React, { Component } from 'react';
import Button from '../Components/Button';
import './App.css';

/**
 * update state with quotes array
 *
 * @param {array} array of quotes
 * @returns {function} state updater function
 */
function addQuotes(quotes) {
  return function update(state) {
    return {
      quotes: [...state, ...quotes]
    }
  }
}

/**
 * update states current quote and current author
 *
 * @param {object} quote object with keys - currentQuote, currentAuthor
 * @returns {function} state updater function
 */
function displayRandomQuote(quote) {
  return function update(state) {
    return {
      currentQuote: quote.quote,
      currentAuthor: quote.author
    }
  }
}

/**
 * gets a Random Quote from an array of quotes
 *
 * @param {array} quotes
 * @returns {object} quote
 */
function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      quotes: [],
      currentQuote: '',
      currentAuthor: ''
    }

    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(res => {
        this.setState(addQuotes(res.quotes));
        this.getQuote();
      })
  }

  getQuote() {
    const randomQuote = getRandomQuote(this.state.quotes);
    this.setState(displayRandomQuote(randomQuote));
  }

  render() {
    const { currentAuthor, currentQuote } = this.state;
    return (
      <div id="quote-box" className="App">
        <div id="text">{currentQuote}</div>
        <div id="author">- {currentAuthor}</div>
        <div className="actions">
          <a id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes,FCC&text="${encodeURIComponent(currentQuote)}" ${encodeURIComponent(currentAuthor)}`}>Tweet</a>
          <Button onClick={this.getQuote} id="new-quote" color="#0E94D3">New Quote</Button>
        </div>
      </div>
    )
  }
}