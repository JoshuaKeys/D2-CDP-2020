import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { withRouter, Link } from 'react-router-native';
import Header from './Header';
import { AsyncStorage } from 'react-native';

export interface Note {
    id: number;
    title: string;
    description: string;
}

const notes: Note[] = [
    {
        id: 1,
        title: 'Note 1',
        description: 'Note 1 Description'
    },
    {
        id: 2,
        title: 'Note 2',
        description: 'Note 2 Description'
    },
    {
        id: 3,
        title: 'Note 3',
        description: 'Note 3 Description',

    }
]

export const Notes = () => (
    <View style={styles.container}>
        <Header title="Notes" back="." isHome={true}></Header>
        <View style={styles.main}>
            {

                notes.map(note => {

                    return (

                        <View key={note.id} style={styles.note}>

                            <Link to={{ pathname: "/details", state: note }}>
                                <Text style={styles.textStyle}>{note.title}</Text>
                            </Link>

                        </View>
                    )
                })
            }
        </View>

    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    main: {
        marginTop: 30,
        padding: 20
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
    textStyle: {
        fontWeight: 'bold'
    }
});
