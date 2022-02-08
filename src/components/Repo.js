import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoOwner from './RepoOwner';

class Repo extends Component {
    render() {
        const { repo } = this.props;
        return (
            <div className="repo">
                <RepoOwner {...repo} />
                <div className="repo-details">
                    <p>name: {repo.name}</p>
                    <p>description: {repo.description}</p>
                    <p>stars: {repo.stars}</p>
                    <p>issues: {repo.issues}</p>
                </div>
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