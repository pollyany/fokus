import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require("./pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require("./short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require("./long.png"),
    display: "Pausa longa",
  },
];
export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);

  const [seconds, setSeconds] = useState(timerType.initialValue);

  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clearTimer();
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      clearTimer();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clearTimer();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000);

    timerRef.current = id;
    
  }

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              display={p.display}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
            />
          ))}
        </View>

        <Timer totalSeconds={seconds} />

        <FokusButton 
        title={timerRunning ? "Pausar" : "Começar"} 
        onPress={toggleTimer} 
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  text: {
    color: "#FFF",
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});
