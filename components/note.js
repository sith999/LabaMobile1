import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Note({item, handler}){
    return(
        <TouchableOpacity onPress={() => handler(item.key)}>
            <Text style={styles.items}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    items: {
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10
    }
})