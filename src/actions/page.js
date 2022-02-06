import { PAGES_NUM } from '../utils/constants'

export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const FIRST_PAGE = 'FIRST_PAGE';
export const LAST_PAGE = 'LAST_PAGE';

export function nextPage(currentPage) {
    return {
        type: NEXT_PAGE,
        page: currentPage < PAGES_NUM ? currentPage + 1 : currentPage,
        updated: currentPage < PAGES_NUM
    };
}

export function prevPage(currentPage) {
    return {
        type: PREV_PAGE,
        page: currentPage === 1 ? currentPage : currentPage - 1,
        update: currentPage !== 1
    };
}

export function lastPage(currentPage) {
    return {
        type: LAST_PAGE,
        page: PAGES_NUM,
        updated: currentPage !== PAGES_NUM
    }
}

export function firstPage(currentPage) {
    return {
        type: FIRST_PAGE,
        page: 1,
        updated: currentPage !== 1
    }
}