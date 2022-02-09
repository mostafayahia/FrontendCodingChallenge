import React from 'react';
import { PAGES_NUM } from '../utils/constants';
import { connect } from 'react-redux';
import { handleGetRepos, unsetRepos } from '../actions/repos';
import { setPage } from '../actions/page';

const FIRST_PAGE = "FIRST_PAGE";
const LAST_PAGE = "LAST_PAGE";
const NEXT_PAGE = "NEXT_PAGE";
const PREV_PAGE = "PREV_PAGE";

function Pagination(props) {
    const paginationBtnHandler = event => {
        event.preventDefault();

        const { name } = event.target;

        const { dispatch, page } = props;
        
        switch (name) {
            case LAST_PAGE:
                if (page !== PAGES_NUM) {
                    const newPage = PAGES_NUM;
                    dispatch(setPage(newPage));
                    dispatchUpdateReposActions(newPage);
                }
                break;
            case NEXT_PAGE:
                if (page < PAGES_NUM) {
                    const newPage = page + 1;
                    dispatch(setPage(newPage));
                    dispatchUpdateReposActions(newPage);
                }
                break;
            case PREV_PAGE:
                if (page !== 1) {
                    const newPage = page - 1;
                    dispatch(setPage(newPage));
                    dispatchUpdateReposActions(newPage);
                }
                break;
            case FIRST_PAGE:
            default:
                if (page !== 1) {
                    const newPage = 1;
                    dispatch(setPage(newPage));
                    dispatchUpdateReposActions(newPage);
                }
                break;
        }
    };

    const dispatchUpdateReposActions = pageNum => {
        const { dispatch } = props;
        dispatch(unsetRepos());
        dispatch(handleGetRepos(pageNum));
    }

    const { page } = props;

    return (
        <div className="pagination center">
            <button className="pagination-btn" name={FIRST_PAGE} onClick={paginationBtnHandler}>&lt;&lt;</button>
            <button className="pagination-btn" name={PREV_PAGE} onClick={paginationBtnHandler}>&lt;</button>
            <span className="pagination-body"><span className="current-page">{page}</span> of {PAGES_NUM}</span>
            <button className="pagination-btn" name={NEXT_PAGE} onClick={paginationBtnHandler}>&gt;</button>
            <button className="pagination-btn" name={LAST_PAGE} onClick={paginationBtnHandler}>&gt;&gt;</button>
        </div>
    )
}

function mapStateToProps({ page }) {
    return {
        page,
    }
}

export default connect(mapStateToProps)(Pagination);