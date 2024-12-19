
const { useState, useEffect } = React; // Import both useState and useEffect

function Counter() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Initial msg');
/*
  //No dependency,the effect run after every render
  useEffect(() => {
    console.log("Component mounted/updated");
    console.log("Message is:", msg);
    console.log("Count is:", count);
  }); 
  */

/*
 //Empty dependency,the effect run only once after the componet mounts.
 useEffect(() => {
    console.log("Component mounted/updated");
    console.log("Message is:", msg);
    console.log("Count is:", count);
  },[]); 
  */

  //with dependecies,the effect runs when the specificied dependecies change,
  //in this case effect is chnage only when count change . 
  useEffect(() => {
    console.log("Component mounted/updated");
    console.log("Message is:", msg);
    console.log("Count is:", count);
  },[count]); 

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>The Count Value is: {count}</p>
      <button onClick={() => setMsg('Message updated on click event')}>Update Message</button>
      <p>The Message is: {msg}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);


/*
=>The useEffect hook lets you perform side effects in your React components.
 It serves the same purpose as lifecycle methods like componentDidMount, 
 componentDidUpdate, and componentWillUnmount in class components.


        _____Syntax______
        -------------------------------------
            useEffect(() => {
          // Side effect logic here
          return () => {
            // Cleanup logic here (optional)
          };
        }, [dependencies]);
        --------------------------------------
          -> Callback Function: The first argument is a function where you write your side effect logic.
          ->Cleanup Function: This optional function is used for cleaning up after the effect (e.g., unsubscribing from events or clearing timers).
          ->Dependencies Array: The second argument specifies when the effect should run. It’s a list of values that the effect depends on.
              
____When Does useEffect Run?_______

->No Dependency Array ([]): The effect runs after every render.
->Empty Dependency Array ([]): The effect runs only once after the component mounts.
->With Dependencies ([value]): The effect runs when the specified dependencies change.

*/