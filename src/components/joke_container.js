import React from 'react';
import JokeForm from './joke_form';
import JokeList from './joke_list';

class JokeContainer extends React.Component {
  constructor(){
    super();
    this.state = {jokes: ["What happens to a frog's car when it breaks down? It gets toad away.", "Q: What did the duck say when he bought lipstick? A: Put it on my bill.", "Q: How do you count cows? A: With a cowculator."]};
  }
  _addJoke(newJoke){
    let currentJokes = this.state.jokes;
    currentJokes.push(newJoke);
    this.setState({jokes: currentJokes});
  }
  render(){
    return (
      <div>
        <JokeForm addJoke={ this._addJoke.bind(this) } />
        <JokeList jokes={ this.state.jokes } />
      </div>
    )
  }
}

export default JokeContainer;
