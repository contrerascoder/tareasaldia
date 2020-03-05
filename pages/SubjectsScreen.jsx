import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from '../comonents/Header'
import { connect } from "react-redux";
import Chip from '../comonents/Chip'

function SubjectsScreen({name}) {
    const styles = StyleSheet.create({
        container: {
            margin: 10
        }
    })

    return (
        <View>
            <Header text="Asignaturas" />
            <View style={styles.container}>
                <Subject subjectName="Lengua castellana" teacherName="María José López" />
            </View>
        </View>
    )
}

function Subject({teacherName, subjectName}) {
    return (<Chip title={subjectName} subtitle={teacherName} />)
}

export default connect(({name}) => ({name}))(SubjectsScreen)