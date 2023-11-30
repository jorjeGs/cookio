import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export const getUserInfo = async (userId) => {
    const response = await axios.get(`${url}/users/${userId}`);
    console.log(response.data);
    return response.data;
}