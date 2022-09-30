import './App.css';
import { Button, Card, useTheme, Switch, createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

function App() {
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <div className="App">
        <Button onClick={() => darkMode.toggle()}>press me!</Button>
        <Card>
          <Switch
            checked={darkMode.value}
            onChange={() => darkMode.toggle()}
            shadow
          /></Card>
        <Card>current theme: {darkMode.value.toString()}</Card>

      </div>
    </NextUIProvider>
  );
}

export default App;
