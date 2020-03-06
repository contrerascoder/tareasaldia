import { ADD_SUBJECT_ACTION, MODIFY_SUBJECT_ACTION, REMOVE_SUBJECT_ACTION } from "./actions";

const INITIAL_STATE = []
let idSubject = 0

export default function SubjectsReduccer(subjects = INITIAL_STATE, {type, payload}) {
    const newState = [...subjects]
    console.log(type);
    switch (type) {
        case ADD_SUBJECT_ACTION:
            console.log(payload);
            
            payload.subject.id = idSubject++
            newState.push(payload.subject)
            break;
        case MODIFY_SUBJECT_ACTION:
            const {subject: subjectMofified, id} = payload
            newState.map(subject => {
                if (subject.id === id) {
                    return subjectMofified
                } else {
                    return subject
                }
            })
            break
        case REMOVE_SUBJECT_ACTION:
            return newState.filter(subject => {
                return subject.id !== payload.id
            })
            break
        default:
            break;
    }
    return newState
}