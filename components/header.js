import {View, Text, StyleSheet} from "react-native";

export default function Header() {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>TODO application</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 60,
        backgroundColor: '#2196f3',
        alignItem: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'Bold',
        justifyContent: 'center'
    }
})