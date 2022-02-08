import { SET_REPOS, UNSET_REPOS } from '../actions/repos'

export default function repos(state = {}, action) {
    switch (action.type) {
        case SET_REPOS:
            return {...action.repos};
        case UNSET_REPOS:
            return {};
        default:
            return state;
    }
}