import { PAGES_NUM } from '../utils/constants'

export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const FIRST_PAGE = 'FIRST_PAGE';
export const LAST_PAGE = 'LAST_PAGE';

export function nextPage(currentPage) {
    const newPage = currentPage < PAGES_NUM ? currentPage + 1 : currentPage;

    // todo: dispatch update repos actions

    return {
        type: NEXT_PAGE,
        page: newPage,
    };
}

export function prevPage(currentPage) {
    const newPage = currentPage === 1 ? currentPage : currentPage - 1;

    // todo: dispatch update repos actions

    return {
        type: PREV_PAGE,
        page: newPage,
    };
}

export function lastPage(currentPage) {
    const newPage = PAGES_NUM;

    // todo: dispatch update repos actions

    return {
        type: LAST_PAGE,
        page: newPage
    }
}

export function firstPage(currentPage) {
    const newPage = 1;

    // todo: dispatch update repos actions
    
    return {
        type: FIRST_PAGE,
        page: newPage
    }
}