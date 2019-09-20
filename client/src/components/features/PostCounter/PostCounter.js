import React from 'react';
import { PropTypes } from 'prop-types';

class PostCounter extends React.Component {

    render() {
        const { counter } = this.props;

        return (
            <div>{counter > 0 ? 'Posts amount: ' + counter : ' No posts '}</div>
        )
    }
}

PostCounter.propTypes = {
  counter: PropTypes.number,
 };

export default PostCounter;