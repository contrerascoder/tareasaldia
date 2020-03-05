import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Header({text}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: '#42DBFD'
    },
    text: {
        fontSize: 22,
        color: '#fff'
    }
})