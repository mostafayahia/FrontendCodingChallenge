import React, { Component } from 'react';
import { connect } from 'react-redux';
import Repo from './Repo';

class RepoList extends Component {
    render() {
        const { ids } = this.props;
        return ids.map(id => <Repo key={id} id={id} />)
    }
}

function mapStateToProps({ repos }) {
    const ids = Object.keys(repos);

    // sorting repos desc according to their stars
    ids.sort((a, b) => repos[b].stars - repos[a].stars);
    
    return { ids, };
}

export default connect(mapStateToProps)(RepoList);

