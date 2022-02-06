import { SET_REPOS } from '../actions/repos'

export function repos(state = [], action) {
    switch (action.type) {
        case SET_REPOS:
            return [...action.repos];
        case UNSET_REPOS:
            return [];
        default:
            return state;
    }
}