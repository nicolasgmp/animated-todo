import "./src/libs/unistyles"
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native-unistyles";
import ThemeToggle from "./src/components/ThemeToggle";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <ThemeToggle />
    </View>
  );
}

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
