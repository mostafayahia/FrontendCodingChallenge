import React from 'react';

function RepoDetails(props) {
    const { name, description, stars, issues } = props;
    return (
        <div className="repo-details">
            <h3 className="capitalize">{name}</h3>
            <p className="repo-description">{description}</p>
            <div className="repo-labels">
                <p className="repo-label">Stars: {stars}</p>
                <p className="repo-label">Issues: {issues}</p>
            </div>
        </div>
    )
}

export default RepoDetails;