import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoOwner from './RepoOwner';
import RepoDetails from './RepoDetails';

class Repo extends Component {
    render() {
        const { repo } = this.props;
        return (
            <div className="repo">
                <RepoOwner {...repo} />
                <RepoDetails {...repo} />
            </div>
        ) 
    }
}

function mapStateToProps({ repos }, { id }) {
    return {
        repo: repos.filter(repo => repo.id === id)[0]
    }
}

export default connect(mapStateToProps)(Repo);