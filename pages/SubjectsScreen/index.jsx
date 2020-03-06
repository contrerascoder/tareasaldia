import React from 'react'
import {View, Button, StyleSheet} from 'react-native'
import Header from '../../comonents/Header'
import { connect } from "react-redux";
import Chip from '../../comonents/Chip'
import {addSubject, modifySubject, removeSubject} from '../../store/subjects/actions';

function SubjectsScreen({addSubject, modifySubject, removeSubject, subjects}) {
    const buttons = (
        <Button title="añadir" onPress={() => setEditing(true)} />
    )
    const styles = StyleSheet.create({
        container: {
            margin: 10
        }
    })
    return (
        <View>
            <Header text="Asignaturas" buttons={buttons} />
            <View style={styles.container}>
                {subjects.map(({subjectName, teacherName, id}) =>
                    <Subject key={id} subjectName={subjectName} teacherName={teacherName} />)}
            </View>
        </View>
    )
}

function Subject({teacherName, subjectName}) {
    return (<Chip title={subjectName} subtitle={teacherName} />)
}

export default connect(
    ({SubjectsReduccer}) => {
        console.log(SubjectsReduccer);
        return {subjects: SubjectsReduccer}
    },
)(SubjectsScreen)