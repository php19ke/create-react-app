export default function userReducer(state = 'defaultState', { type, payload }) {
    if (type === 'updateUserState') {
        return payload.newState;
    }

    return state;
}
