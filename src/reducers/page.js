import { NEXT_PAGE, PREV_PAGE, FIRST_PAGE, LAST_PAGE } from '../actions/page';

export default function page(state = 1, action) {
    switch (action.type) {
        case NEXT_PAGE:
        case PREV_PAGE:
        case FIRST_PAGE:
        case LAST_PAGE:
            return action.page;
        default:
            return state;
    }
}