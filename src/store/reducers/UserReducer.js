import { CONFIRMED_GET_USERS } from '../actions/types/UserType';

const initialState = []

export default function UsersReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_USERS) {
        state = actions.users
        return [
            ...state,
        ];
    }
    return state;
}