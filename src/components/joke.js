import React from 'react';
import Upvoter from './upvoter';
import Downvoter from './downvoter';


class Joke extends React.Component {
  constructor(){
    super();
    this.state = {upvotes: 0};
  }
  _upvote(){
    let currentVotes = this.state.upvotes;
    this.setState({upvotes: currentVotes + 1});
  }
  _downvote(){
    let currentVotes = this.state.upvotes;
    if (currentVotes > 0){
      this.setState({upvotes: currentVotes - 1});
    }
  }
  render(){
    return (<div>
      <h3>{ this.props.text }</h3>
      <Upvoter upvote={ this._upvote.bind(this) } />
      <Downvoter downvote={ this._downvote.bind(this) } />
      <p>Upvotes: { this.state.upvotes }</p>
    </div>);
  }
}

export default Joke;
