import React from 'react';
import { PropTypes } from 'prop-types';
//import Posts from '../Posts/Posts';

class PostCounter extends React.Component {
  // componentDidMount() {
  //   const { loadPosts } = this.props;
  //   loadPosts();
  // }

    render() {
        const {posts} = this.props;

        return (
            <div>
            {posts > 0 ? 'Posts amount: ' + posts : ' No posts '}
            </div>
        )
    }
}
PostCounter.propTypes = {
  posts: PropTypes.number,
};

export default PostCounter;