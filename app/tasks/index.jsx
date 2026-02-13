import { StyleSheet, Text, View } from "react-native";
import TaskItem from "../../components/TaskItem";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";

export default function Tasks() {
    return (<View style={styles.container}>
        <View style={styles.wrapper} >
            <Text style={styles.text}>
                Lista de tarefas:
            </Text>
            <View style={styles.inner}>
                <TaskItem
                    completed
                    text="Estudar React"
                />
                <TaskItem
                    text="Estudar React Native"
                />
            </View>
            <FokusButton
                title="Adicionar nova tarefa"
                icon={<IconPlus outline />}
                outline
            />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center'
    },
    wrapper: {
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 26
    },
    inner: {
        gap: 8
    }
})