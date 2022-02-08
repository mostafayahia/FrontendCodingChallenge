import React, { Component } from 'react';
import { connect } from 'react-redux';
import Repo from './Repo';

class RepoList extends Component {
    render() {
        const { ids } = this.props;
        return ids.map(id => <Repo id={id} />)
    }
}

function mapStateToProps({ repos }) {
    return { ids: repos.map(repo => repo.id) };
}

export default connect(mapStateToProps)(RepoList);

