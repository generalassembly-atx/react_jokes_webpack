import React from 'react';

class JokeForm extends React.Component {
  _handleSubmit(event){
    event.preventDefault();
    let newJoke = this.refs.newJokeText.value;
    this.props.addJoke(newJoke);
    this.refs.newJokeText.value = '';
  }
  render(){
    return (
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input ref="newJokeText" type="text" />
        <input type="submit" value="Add New Joke" />
      </form>
    )
  }
}

export default JokeForm;
