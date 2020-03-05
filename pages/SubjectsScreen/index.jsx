import React, {useState} from 'react'
import {View, Button, StyleSheet, Text, Modal} from 'react-native'
import Header from '../../comonents/Header'
import { connect } from "react-redux";
import Chip from '../../comonents/Chip'
import { If } from "react-extras";
import { TextInput } from 'react-native-gesture-handler';

function SubjectsScreen({}) {
    const [editing, setEditing] = useState(true)

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
                <Subject subjectName="Lengua castellana" teacherName="María José López" />
            </View>
            <If condition={editing}>
                <EditorSubject visible={editing} onClose={() => setEditing(false)} />
            </If>
        </View>
    )
}

function Subject({teacherName, subjectName}) {
    return (<Chip title={subjectName} subtitle={teacherName} />)
}

export default connect(({name}) => ({name}))(SubjectsScreen)