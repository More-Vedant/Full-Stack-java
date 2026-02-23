import axios from 'axios';

const Base_API = axios.create({
    baseURL: 'https://reqres.in/api',
});

export const getData = async (path) => {
    try {
        const res = await Base_API.get(`${path}`,{
            header: { 'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f' },
        });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};