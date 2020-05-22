import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { AddNote } from './components/AddNote';
import { Notes } from './components/Notes';
import { NoteDetails } from './components/NoteDetails';



export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/add" component={AddNote} />
          <Route path="/details" component={NoteDetails} />
        </Switch>

      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    flexDirection: 'column'
  },
});
