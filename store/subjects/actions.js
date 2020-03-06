export const ADD_SUBJECT_ACTION = 'ADD_SUBJECT'
export const MODIFY_SUBJECT_ACTION = 'MODIFY_SUBJECT'
export const REMOVE_SUBJECT_ACTION = 'REMOVE_SUBJECT'


export function addSubjectActionCreator(subject) {
    return {
        type: ADD_SUBJECT_ACTION,
        payload: {subject}
    }
}

export function modifySubjectActionCreator(id, subject) {
    return {
        type: MODIFY_SUBJECT_ACTION,
        payload: {id, subject}
    }
}

export function removeSubjectActionCreator(id) {
    return {
        type: REMOVE_SUBJECT_ACTION,
        payload: {id}
    }
}