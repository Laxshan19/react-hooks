//When the State Logic is Complex or Involves Multiple Sub-Values
const { useReducer } = React;

const initialState = { // Declare `initialState` properly
  theme: 'light',
  fontSize: 14,
  notifications: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleTheme':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'setFontSize':
      return { ...state, fontSize: action.payload };
    case 'toggleNotifications':
      return { ...state, notifications: !state.notifications };
    default:
      throw new Error('Unknown action type');
  }
};

function Settings() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Theme: {state.theme}</p>
      <p>Font Size: {state.fontSize}</p>
      <p>Notifications: {state.notifications ? 'On' : 'Off'}</p>
      <button onClick={() => dispatch({ type: 'toggleTheme' })}>Toggle Theme</button>
      <button onClick={() => dispatch({ type: 'setFontSize', payload: 16 })}>Set Font Size to 16</button>
      <button onClick={() => dispatch({ type: 'toggleNotifications' })}>Toggle Notifications</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Settings />);
