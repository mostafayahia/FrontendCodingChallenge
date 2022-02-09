export const SET_PAGE = 'SET_PAGE';

export function setPage(pageNum) {
    return {
        type: SET_PAGE,
        page: pageNum,
    };
}