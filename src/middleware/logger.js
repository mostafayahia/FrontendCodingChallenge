const logger = store => next => action => {
    const { getState } = store;

    console.group(action.type);
    console.log('The action:', action);
    const returnVal = next(action);
    console.log('The new state:', getState());
    console.groupEnd();

    return returnVal;
}

export default logger;