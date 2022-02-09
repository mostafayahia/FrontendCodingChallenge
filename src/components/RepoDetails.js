import React from 'react';
import PropTypes from 'prop-types';

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

RepoDetails.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    stars: PropTypes.number.isRequired,
    issues: PropTypes.number.isRequired,
};

export default RepoDetails;