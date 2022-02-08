import React, { Component } from 'react';
import { PAGES_NUM } from '../utils/constants';
import { connect } from 'react-redux';
import { firstPage, lastPage, nextPage, prevPage } from '../actions/page';
import { UNSET_REPOS, handleGetRepos, unsetRepos } from '../actions/repos';

const FIRST_PAGE = "FIRST_PAGE";
const LAST_PAGE = "LAST_PAGE";
const NEXT_PAGE = "NEXT_PAGE";
const PREV_PAGE = "PREV_PAGE";

class Pagination extends Component {
    paginationBtnHandler = event => {
        event.preventDefault();

        const { name } = event.target;

        const { dispatch, page } = this.props;
        
        switch (name) {
            case FIRST_PAGE:
                dispatch(firstPage(page));
                if (page !== 1) {
                    dispatch(unsetRepos());
                    dispatch(handleGetRepos(1))
                }
                break;
            case LAST_PAGE:
                dispatch(lastPage(page));
                if (page !== PAGES_NUM) {
                    dispatch(unsetRepos());
                    dispatch(handleGetRepos(PAGES_NUM))
                }
                break;
            case NEXT_PAGE:
                dispatch(nextPage(page));
                if (page < PAGES_NUM) {
                    dispatch(unsetRepos());
                    dispatch(handleGetRepos(page + 1))
                }
                break;
            case PREV_PAGE:
                dispatch(prevPage(page));
                if (page !== 1) {
                    dispatch(unsetRepos());
                    dispatch(handleGetRepos(page - 1))
                }
                break;
        }
    }

    render() {
        const { page } = this.props;

        return (
            <div className="pagination center">
                <button className="pagination-btn" name={FIRST_PAGE} onClick={this.paginationBtnHandler}>&lt;&lt;</button>
                <button className="pagination-btn" name={PREV_PAGE} onClick={this.paginationBtnHandler}>&lt;</button>
                <span className="pagination-body"><span className="current-page">{page}</span> of {PAGES_NUM}</span>
                <button className="pagination-btn" name={NEXT_PAGE} onClick={this.paginationBtnHandler}>&gt;</button>
                <button className="pagination-btn" name={LAST_PAGE} onClick={this.paginationBtnHandler}>&gt;&gt;</button>
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