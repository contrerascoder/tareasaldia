import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Header({text, buttons}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{text}</Text>
            <View>
                {buttons}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: '#42DBFD',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 22,
        color: '#fff'
    }
})