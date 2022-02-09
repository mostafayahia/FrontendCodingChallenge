import { SET_PAGE } from '../actions/page';

export default function page(state = 1, action) {
    switch (action.type) {
        case SET_PAGE:
            return action.page;
        default:
            return state;
    }
}