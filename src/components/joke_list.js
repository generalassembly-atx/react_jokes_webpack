import React from 'react';
import Joke from './joke';

class JokeList extends React.Component {
  render(){
    return (
      <div>
        { this.props.jokes.map((jokeString, i) => <Joke key={i} text={jokeString} />) }
      </div>
    )
  }
}

export default JokeList;
