import React from 'react';
import { connect } from 'react-redux';
import Repo from './Repo';

function RepoList(props) {
    const { ids } = props;
    return ids.map(id => <Repo key={id} id={id} />);
}

function mapStateToProps({ repos }) {
    const ids = Object.keys(repos);

    // sorting repos desc according to their stars
    ids.sort((a, b) => repos[b].stars - repos[a].stars);
    
    return { ids, };
}

export default connect(mapStateToProps)(RepoList);

