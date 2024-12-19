const { createContext ,useContext } = React; // Import both useState and useEffect

// Create a context
const ThemeContext = createContext();

const App = () => {
  const theme = "dark"; // This could be dynamic, like from state or props
 

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext); // Access the context

  return <button style={{ background: theme === "dark" ? "#333" : "#FFF", color: theme === "dark" ? "#FFF" : "#000" }}>I am styled by theme!</button>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
