import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {
  render() {
    const { counter } = this.props;
    let number;
    if (counter === 0) {
      number = 'No posts';
    } else {
      number = counter;
    }
    return <div>Posts no: {number} </div>;
    
  }
}
PostsCounter.propTypes = {
  counter: PropTypes.number
};

export default PostsCounter;