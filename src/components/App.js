import React, { Component, Fragment } from 'react';
import Pagination from './Pagination';
import { handleGetRepos } from '../actions/repos';
import { connect } from 'react-redux';
import RepoList from './RepoList';
import PropTypes from 'prop-types';

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
    loading: JSON.stringify(repos) === "{}",
    page,
  }
}

App.propTypes = {
  page: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
