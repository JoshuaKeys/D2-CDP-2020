import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, AsyncStorage } from "react-native";
import Header from './Header';

function save(props: any) {
    props.history.goBack()
}
export const AddNote = (props: any) =>
    <View style={styles.container}>
        <Header title="Add Note" isHome={false} back="../"></Header>
        <View style={styles.main}>
            <TextInput placeholder="Note title" style={styles.input}></TextInput>
            <TextInput placeholder="Description" editable style={[styles.input, styles.description]} multiline numberOfLines={10}></TextInput>
            <Button onPress={() => save(props)} title="Save"></Button>
        </View>

    </View>

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    main: {
        padding: 20
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20
    },
    description: {
        height: 100
    }
})