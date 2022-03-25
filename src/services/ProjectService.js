import axiosInstance from '../services/AxiosInstance';
import swal from "sweetalert";

export function getProject() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_PROJECTLIST_ENDPOINT}`,
    );
}

export function formatProject(projectData) {
    let projects = [];
    for (let key in projectData) {
        projects.push({ ...projectData[key], id: key });
    }

    return projects;
}
export function formatError(errorResponse) {
    if (errorResponse.errorcode !== 0)
        swal("Oops", errorResponse.messagedetail, "error");
}