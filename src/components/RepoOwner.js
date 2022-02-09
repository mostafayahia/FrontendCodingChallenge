import React from 'react';

function RepoOwner(props) {
    const { ownerAvatar, ownerName } = props;
    return (
        <div className="repo-owner">
            <img className="owner-avatar" src={ownerAvatar} alt={`Avatar of ${ownerName}`} />
            <p className="owner-name center capitalize">{ownerName}</p>
        </div>
    );
}

export default RepoOwner;