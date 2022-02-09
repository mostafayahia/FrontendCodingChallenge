import React from 'react';
import { connect } from 'react-redux';
import Repo from './Repo';
import PropTypes from 'prop-types';

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

RepoList.propTypes = {
    ids: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(RepoList);

