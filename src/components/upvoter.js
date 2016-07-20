import React from 'react';

class Upvoter extends React.Component {
  _handleClick(){
    this.props.upvote();
  }
  render(){
    return (<i onClick={ this._handleClick.bind(this) } className="fa fa-thumbs-o-up" aria-hidden="true"></i>);
  }
}

export default Upvoter;
