/* eslint-disable no-console */
export const logger = ({ getState }) => next => async (action) => {
    console.group(action.type);
    console.info("dispatching", action);
    /**
     * action: {
     *  type: something fulfiled
     *  payload: response: Object[]
     *  meta: requestStatus: "fulfilled" or "pending"
     * }
     */
    console.log("old state", getState());

    // move on to the next state after fulfilled, pending or rejected
    let result = next(action);
    console.log("next state", getState());
    console.groupEnd();
    return result;
};