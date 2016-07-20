// 1. Set up state change function
// 2. Pass state change function to child in props
// 3. Set up _handleClick function or whatever will INVOKE the state change function
// 4. Set up onClick or whatever listener will call the child function

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

class JokeList extends React.Component {
  render(){
    return (
      <div>
        { this.props.jokes.map((jokeString) => <Joke text={jokeString} />) }
      </div>
    )
  }
}

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

class Upvoter extends React.Component {
  _handleClick(){
    this.props.upvote();
  }
  render(){
    return (<i onClick={ this._handleClick.bind(this) } className="fa fa-thumbs-o-up" aria-hidden="true"></i>);
  }
}

class Downvoter extends React.Component {
  _handleClick(){
    this.props.downvote();
  }
  render(){
    return (<i onClick={ this._handleClick.bind(this) } className="fa fa-thumbs-o-down" aria-hidden="true"></i>);
  }
}

ReactDOM.render(<JokeContainer />, document.getElementById('app-container'));
