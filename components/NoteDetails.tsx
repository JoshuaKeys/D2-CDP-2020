import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Header from './Header';

export class NoteDetails extends React.Component {
    render() {
        const state = this.props.history.location.state
        return (
            <View style={styles.container}>
                <Header title="Details" isHome={false} back="../"></Header>
                <Text style={styles.main}>{state.title}</Text>
                <Text style={styles.main}>{state.description}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    note: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    main: {
        fontSize: 30,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30
    }
});