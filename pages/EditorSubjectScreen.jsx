import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import { connect } from "react-redux";

function EditorSubjectScreen({}) {
    return (
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black'}}>
            <View style={{margin: 10, backgroundColor: '#fff', padding: 10, boxSizing: 'border-box', height: '100vh'}}>
                <Text>Nombre de la asignatura</Text>
                <TextInput value="Hol sdlksdklkdsl" />
                <Text>Nombre del profesor</Text>
                <TextInput value="Hol sdlksdklkdsl" />
                <View style={{display: "flex", justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <Button onPress={onClose} title="Cancelar" />
                    <Button title="Añadir" onPress={() => null} />
                </View>
            </View>
        </View>
    )
}

export default connect()(EditorSubject)