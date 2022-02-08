import React, { Component, Fragment } from 'react';
import Pagination from './Pagination';
import { handleGetRepos } from '../actions/repos';
import { connect } from 'react-redux';
import RepoList from './RepoList';

class App extends Component {

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(handleGetRepos(page));
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="container">
        <h1 className="center">Top Starred Repos in the last 30 days</h1>
        {
          !loading &&
          <Fragment>
            <Pagination />
            <RepoList />
          </Fragment>
        }
      </div>
    )
  }
}

function mapStateToProps({ repos, page }) {
  return {
    loading: !repos || repos.length == 0,
    page,
  }
}

export default connect(mapStateToProps)(App);
