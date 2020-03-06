import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default function Chip({title, subtitle}) {
    return (
        <View style={styles.container}>
            <View style={styles.icon}></View>
            <View style={styles.info}>
                <Text style={styles.subjectName}>{title}</Text>
                <Text style={styles.teacherName}>{subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#E9E9E9',
        borderRadius: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    icon: {
        borderRadius: 25,
        backgroundColor: '#42DBFD',
        height: 50,
        width: 50,
        marginRight: 6
    },
    info: {
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        padding: 4
    },
    subjectName: {
        fontSize: 18
    },
    teacherName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#42DBFD'
    }
})