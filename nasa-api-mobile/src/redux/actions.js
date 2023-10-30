import { apiKey } from "../utils/utils";
import axios from 'axios';
import { format, sub } from 'date-fns';

export const actions = {
    GET_APOD: "GET_APOD",
    QUITE_APOD: "QUITE_APOD",
    ERROR: "ERROR",
    GET_APOD_FOR_DATE: "GET_APOD_FOR_DATE"
};

const url = `https://api.nasa.gov/planetary/apod`;

export const get_apod = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${url}?api_key=${apiKey}`).then((res) => res.data);
            return dispatch({
                type: "GET_APOD",
                payload: response
            });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error
            });
        };
    };
};

export const get_apod_for_date = () => {
    return async (dispatch) => {
        try {
            const date = new Date();
            const todayDate = format(date, 'yyyy-MM-dd');
            const fiveDaysAgo = format(sub(date, { days: 5 }), 'yyyy-MM-dd');
            const response = await axios.get(`${url}?api_key=${apiKey}&start_date=${fiveDaysAgo}&end_date=${todayDate}`).then((res) => res.data);
            return dispatch({
                type: "GET_APOD_FOR_DATE",
                payload: response
            });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error
            });
        };
    };
};

export const quite_apod = () => {
    return (dispatch) => {
        return dispatch({
            type: "QUITE_APOD",
            payload: null
        });
    };
};