import { BACKEND_URL } from "../../constants/endpoints";

const makeRequest = async (path: string, options: RequestInit) => {
    try{
        options.headers = {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            ...options.headers
        };
        return await (await fetch(`${BACKEND_URL}${path}`, options)).json();
    } catch(err) {
        // throw new Error();
    }
};

export default makeRequest;