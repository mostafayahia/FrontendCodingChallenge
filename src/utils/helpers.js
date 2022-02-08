export function getDateStringAfterDeltaInDays(deltaInDays) {
    const date = new Date();
    const newDate = new Date(date.getTime() + 1000 * 60 * 60 * 24 * deltaInDays);
    return _formatDate(newDate);
}

function _formatDate(date) {
    const yyyy = date.getFullYear();
    
    // add 1 to month because date object return zero based month number
    const mm = date.getMonth() + 1;

    const dd = date.getUTCDate();
    
    return `${yyyy}-${(mm < 10 ? "0" : "") + mm}-${(dd < 10 ? "0" : "") + dd}`;
    
}