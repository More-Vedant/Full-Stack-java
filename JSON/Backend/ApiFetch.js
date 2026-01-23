export const Apicall = () => {
    return fetch('')
    .then((res) => res)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const BASE_URL = '';