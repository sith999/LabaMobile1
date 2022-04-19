import React, {useState} from 'react'
import { View, Button, TextInput, StyleSheet } from "react-native";

export default function AddNote( {addHandler} ) {
    const [textField, changeHandler] = useState('')
    function getNode(){
        addHandler(textField)
        changeHandler('')
    }

    function onChange(val){
        changeHandler(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                value={textField}
                onChangeText={onChange}
                ></TextInput>
            <Button
                title='add'
                onPress={getNode}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})