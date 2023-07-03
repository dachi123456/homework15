import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const [theme,setTheme] = useLocalStorage('theme','light')
  const windowSize = useWindowSize();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  const lightThemeStyles = {
    backgroundColor: "#ffffff",
    color: "#000000",
  }

  const darkThemeStyles = {
    backgroundColor: "#000000",
    color: "#ffffff",
  };

  
  let themeStyles = theme === "light" ? lightThemeStyles : darkThemeStyles;

  if (windowSize.width < 768) {
    themeStyles = lightThemeStyles
  }
  
  return (
    
     
      <div style={{ ...themeStyles,}} className='main'>

    <button onClick={toggleTheme}>toggle theme</button>

         {windowSize.width >= 568 ? (
        <p>Theme is set to: {theme}</p>
      ) : (
        <p>Theme is set to: {theme === "light" ? "Light" : "Dark"}</p>
      )}

    </div>
    
  );
}

export default App;
