import { actions } from "./actions";

const initialState = {
    apod: null,
    apodFiveDays: [],
    apodDetail: null,
    error: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_APOD:
            return {
                ...state,
                apod: action.payload
            };

        case actions.QUITE_APOD:
            return {
                ...state,
                apodDetail: action.payload
            };

        case actions.GET_APOD_FOR_DATE:
            return {
                ...state,
                apodFiveDays: action.payload
            };

        case actions.APOD_DETAIL:
            return {
                ...state,
                apodDetail: action.payload
            };

        case actions.ERROR:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    };
};