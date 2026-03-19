import axios from 'axios';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const USER_DATA_FAILUER = 'USER_DATA_FAILUER';

const getUserData_success = (value) => {
    return { type: USER_DATA_SUCCESS, payload: value };
};

const getUserData_request = () => {
    return { type: USER_DATA_REQUEST };
};

const getUserData_failuer = () => {
    return { type: USER_DATA_FAILUER };
};

const useData = (dispatch) => {
    dispatch(getUserData_request());
    return axios ({
        method: 'GET',
        url: 'api/users',
        baseURL: 'https://reqres.in',
        headers: {
            'Content'
        }
    })
}