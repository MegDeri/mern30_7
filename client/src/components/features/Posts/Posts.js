import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import PostCounter from '../PostCounter/PostCounter';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const {posts, request} = this.props;

    const textin =  request.pending ? ( 
        <Spinner /> 
      ) : request.success ? ( 
         posts.length > 0 ? (
          <PostsList posts={posts} /> 
      ) : ( 
        <Alert wariant="info"> No posts!!! </Alert>
      )) : ( 
        <Alert wariant="error"> {request.error} </Alert>
      );

    return (
      <div> {textin} </div>
    );
  }

};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;