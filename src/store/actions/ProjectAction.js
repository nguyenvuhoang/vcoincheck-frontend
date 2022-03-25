import {
    formatError, formatProject, getProject
} from '../../services/ProjectService';
import {
    CONFIRMED_GET_PROJECTS
} from './types/ProjectType';


export function confirmedGetProjectAction(projects) {
    return {
        type: CONFIRMED_GET_PROJECTS,
        projects,
    };
};

export function getProjectsAction() {
    return (dispatch) => {
        getProject().then((response) => {
            let projects = formatProject(response.result.data);
            dispatch(confirmedGetProjectAction(projects));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};