import { apiKey } from "../utils/utils";
import axios from 'axios';

export const actions = {
    GET_APOD: "GET_APOD",
    QUITE_APOD: "QUITE_APOD",
    ERROR: "ERROR"
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

export const get_apod_for_date = (date) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${url}?api_key=${apiKey}`).then((res) => res.data);
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error
            })
        }
    }
};

export const quite_apod = () => {
    return (dispatch) => {
        return dispatch({
            type: "QUITE_APOD",
            payload: null
        });
    };
};