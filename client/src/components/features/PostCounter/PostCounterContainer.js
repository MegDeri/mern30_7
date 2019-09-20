import { connect } from 'react-redux';
import { counterPosts, loadPostsRequest, loadPostsRequest } from '../../../redux/postsRedux';
import PostCounter from './PostCounter';

const mapStateToProps = state => ({
    posts: getPosts(state),
    counter: counterPosts(state),
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(PostCounter);
