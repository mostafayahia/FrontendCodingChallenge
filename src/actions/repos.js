import {
    REPOS_PER_PAGE, DELTA_IN_DAYS
} from '../utils/constants'

import {
    getDateStringAfterDeltaInDays
} from '../utils/helpers'

export const SET_REPOS = 'SET_REPOS';
export const UNSET_REPOS = 'UNSET_REPOS';

function setRepos(repos) {
    return {
        type: SET_REPOS,
        repos,
    };
}

export function handleGetRepos(pageNum) {
    return async dispatch => {
        const url = 'https://api.github.com/search/repositories?q=created:%3E' + getDateStringAfterDeltaInDays(DELTA_IN_DAYS) +
            "&sort=stars" + 
            "&order=desc" + 
            "&page=" + pageNum +
            "&per_page=" + REPOS_PER_PAGE;
        
        const response = await fetch(url);
        const repos = response.items;
        dispatch(setRepos(repos));
    }
}