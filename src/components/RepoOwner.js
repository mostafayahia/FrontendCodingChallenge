import React, { Component } from 'react';

class RepoOwner extends Component {
    render() {
        const { ownerAvatar, ownerName } = this.props;
        return (
            <div className="repo-owner">
                <img className="owner-avatar" src={ownerAvatar} alt={`Avatar of ${ownerName}`} />
                <p className="owner-name center capitalize">{ownerName}</p>
            </div>
        );
    }
}

export default RepoOwner;