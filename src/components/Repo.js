import React from 'react';
import { connect } from 'react-redux';
import RepoOwner from './RepoOwner';
import RepoDetails from './RepoDetails';

function Repo(props) {
    
    const { repo } = props;
    return (
        <div className="repo">
            <RepoOwner {...repo} />
            <RepoDetails {...repo} />
        </div>
    ) 
}

function mapStateToProps({ repos }, { id }) {
    return {
        repo: repos[id],
    }
}

export default connect(mapStateToProps)(Repo);