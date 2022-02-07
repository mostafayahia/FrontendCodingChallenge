import React, { Component } from 'react';
import { PAGES_NUM } from '../utils/constants';
import { connect } from 'react-redux';

class Pagination extends Component {
    render() {
        const { page } = this.props;

        return (
            <div className="pagination center">
                <button className="pagination-btn">&lt;&lt;</button>
                <button className="pagination-btn">&lt;</button>
                <span className="pagination-body"><span className="current-page">{page}</span> of {PAGES_NUM}</span>
                <button className="pagination-btn">&gt;</button>
                <button className="pagination-btn">&gt;&gt;</button>
            </div>
        )
    }
}

function mapStateToProps({ page }) {
    return {
        page,
    }
}

export default connect(mapStateToProps)(Pagination);