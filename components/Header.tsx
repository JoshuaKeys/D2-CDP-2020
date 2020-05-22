import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';

function addNote(evt: any) {

}

export default function Header(props: { title: string, isHome: boolean, back: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{props.title}</Text>
            {
                props.isHome ? <Link style={styles.linkStyle} to="/add">
                    {/* <Button
                        onPress={addNote}
                        title="+"
                    ></Button> */}
                    <Text>+</Text>
                </Link> : null
            }
            {
                !props.isHome ? <Link to={props.back}><Text>Back</Text></Link> : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        padding: 20,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
    },
    heading: {
        display: 'flex',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',

    },
    linkStyle: {
        paddingRight: 20
    },
    button: {
        borderWidth: 1,
        borderColor: 'black'
    }
});
