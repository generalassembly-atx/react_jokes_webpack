import React from 'react';

class Downvoter extends React.Component {
  _handleClick(){
    this.props.downvote();
  }
  render(){
    return (<i onClick={ this._handleClick.bind(this) } className="fa fa-thumbs-o-down" aria-hidden="true"></i>);
  }
}

export default Downvoter;
