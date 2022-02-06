export function getDateStringAfterDeltaInDays(deltaInDays) {
    const date = new Date();
    const newDate = new Date(date.getTime() - 1000 * 60 * 60 * 24 * deltaInDays)

    // add 1 to month because date object return zero based month number
    return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDay()}`
}