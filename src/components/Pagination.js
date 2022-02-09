import React, { Component } from 'react';
import { PAGES_NUM } from '../utils/constants';
import { connect } from 'react-redux';
import { handleGetRepos, unsetRepos } from '../actions/repos';
import { setPage } from '../actions/page';

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
            case LAST_PAGE:
                if (page !== PAGES_NUM) {
                    const newPage = PAGES_NUM;
                    dispatch(setPage(newPage));
                    this.dispatchUpdateReposActions(newPage);
                }
                break;
            case NEXT_PAGE:
                if (page < PAGES_NUM) {
                    const newPage = page + 1;
                    dispatch(setPage(newPage));
                    this.dispatchUpdateReposActions(newPage);
                }
                break;
            case PREV_PAGE:
                if (page !== 1) {
                    const newPage = page - 1;
                    dispatch(setPage(newPage));
                    this.dispatchUpdateReposActions(newPage);
                }
                break;
            case FIRST_PAGE:
            default:
                if (page !== 1) {
                    const newPage = 1;
                    dispatch(setPage(newPage));
                    this.dispatchUpdateReposActions(newPage);
                }
                break;
        }
    }

    dispatchUpdateReposActions(pageNum) {
        const { dispatch } = this.props;
        dispatch(unsetRepos());
        dispatch(handleGetRepos(pageNum));
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