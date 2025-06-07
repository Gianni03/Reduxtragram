import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreate';
import Main from './Main';

function mapStataeToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStataeToProps, mapDispatchToProps)(Main);

export default App;