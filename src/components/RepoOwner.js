import React from 'react';
import PropTypes from 'prop-types';

function RepoOwner(props) {
    const { ownerAvatar, ownerName } = props;
    return (
        <div className="repo-owner">
            <img className="owner-avatar" src={ownerAvatar} alt={`Avatar of ${ownerName}`} />
            <p className="owner-name center capitalize">{ownerName}</p>
        </div>
    );
}

RepoOwner.propTypes = {
    ownerAvatar: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired
};

export default RepoOwner;