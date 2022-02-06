import { NEXT_PAGE, PREV_PAGE, FIRST_PAGE, LAST_PAGE } from '../actions/page';

export function page(state = {}, action) {
    switch (action.type) {
        case NEXT_PAGE:
        case PREV_PAGE:
        case FIRST_PAGE:
        case LAST_PAGE:
            return {
               page: action.page,
               updated: action.updated
            };
        default:
            return state;
    }
}