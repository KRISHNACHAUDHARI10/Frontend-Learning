import { useState } from "react";
import Welcome from "./componunet/Welcome";
import Themetoggle from "./componunet/Themetoggle";
import ThemeContext from "./store/Themecontext";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Welcome />
      <Themetoggle />
    </ThemeContext.Provider>
  );
}

export default App;
