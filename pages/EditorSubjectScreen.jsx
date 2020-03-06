import React, {useState} from 'react'
import { View, TextInput, Text, Button } from "react-native";
import { connect } from "react-redux";
import { addSubjectActionCreator } from "../store/subjects/actions";
import t from 'tcomb-form-native'

const Form = t.form.Form

function EditorSubjectScreen({addSubject}) {
    const options = {
        fields: {
            subjectName: {
                label: 'Nombre de asignatura'
            },
            teacherName: {
                label: 'Nombre profesor'
            }
        }
    }
    const Subject = t.struct({
        subjectName: t.String,
        teacherName: t.String
    })

    let formData

    const handleSubmit = () => {
        const {subjectName, teacherName} = formData.getValue()
        addSubject(subjectName, teacherName);
        
    }

    return (
        <View>
            <Form options={options} ref={c => formData = c} type={Subject} />
            <Button title="Añadir" onPress={handleSubmit} />
        </View>
    )
}

export default connect(
    () => ({}),
    dispatch => ({
        addSubject(subjectName, teacherName) {
            dispatch(addSubjectActionCreator({subjectName, teacherName}))
        }
    })
)(EditorSubjectScreen)