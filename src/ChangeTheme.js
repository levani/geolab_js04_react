import { useContext } from "react"
import ThemeContext from "./ThemeContext";

export default function ChangeTheme() {
  const {currentTheme, setCurrentTheme} = useContext(ThemeContext);

  // const theme = useContext(ThemeContext);
  // const currentTheme = theme.currentTheme;
  // const setCurrentTheme = theme.setCurrentTheme;

  function changeTheme() {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  return <button
    onClick={changeTheme}>
      Change Theme
    </button>
}