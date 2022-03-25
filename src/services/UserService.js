import axiosInstance from '../services/AxiosInstance';
import axios from 'axios';
import swal from "sweetalert";

export function getUser() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_USERLIST_ENDPOINT}`,
    );
}

export function getUserRole() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_USERROLE_ENDPOINT}`,
    );
}

export function formatData(data) {
    let list = [];
    for (let key in data) {
        list.push({ ...data[key], id: key });
    }

    return list;
}
export function formatError(errorResponse) {
    if (errorResponse.errorcode !== 0)
        swal("Oops", errorResponse.messagedetail, "error");
}

export function registerUser(postData) {
    return axios.post(
        `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_REGISTER_ENDPOINT}`,
        postData,
    );
}