import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

export default function ThemeToggle() {
  const [themeName, setThemeName] = useState(UnistylesRuntime.themeName)
  const toggleTheme = () => {
    if (UnistylesRuntime.themeName === 'dark') {
      UnistylesRuntime.setTheme('light')
      setThemeName('light')
    } else {
      UnistylesRuntime.setTheme('dark')
      setThemeName('dark')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Dark</Text>
      <Switch onValueChange={toggleTheme} value={themeName === 'light'}></Switch>
      <Text>Light</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
