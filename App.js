import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Header from './components/header.js'
import AddNote from './components/add_note.js'
import Note from './components/note.js'

export default function App() {
  const [data, dataHandler] = useState([
    {text: 'click to remove', key: '1'}
  ])
  function addHandler(inputText)
  {
    dataHandler((previous) => {
      previous.push(
        {text: inputText, key: Math.random().toString()}
      )

      return [...previous]
    })

    console.log(data)
  }

  function removeHandler(itemKey){
    dataHandler((previous) =>{
      var newData = [];
      for (let i=0; i<previous.length; i++){
        if (previous[i].key == itemKey) continue;
        newData.push(previous[i])
      }

      return newData
    })
  }

  return (
    <View style={styles.root}>
      <Header/>
      <View style={styles.content}>
        <AddNote
          addHandler={addHandler}
        />
        <View style={styles.list}>
          <FlatList
            data = {data}
            renderItem={function({item}){
              return (
                <Note
                  item={item}
                  handler={removeHandler}
                />
              )
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
