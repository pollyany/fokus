import { SafeAreaView, Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import { IconSave } from "../../components/Icons";

export default function AddTask () {
    return (<SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            Adicionar uma tarefa:
        </Text>
        <View style={styles.inner}>
            <Text style={styles.label}>
                Em que você está trabalhando?
            </Text>
            <TextInput 
                style={styles.input}
                numberOfLines={10}    
            />
            <Pressable style={styles.button}>
                <IconSave /> 
                <Text>
                    Salvar
                </Text>
            </Pressable>
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        gap: 16,
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 26
    },
    inner: {
        backgroundColor: '#98A0A8',
        width: '90%',
        borderRadius: 8,
        padding: 16,
        gap: 32
    },
    label: {
        fontWeight: 600,
        fontSize: 18
    },
    input: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
})