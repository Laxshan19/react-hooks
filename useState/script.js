const { useState } = React;

function Counter() {
  const [count, setCount] = useState(100); // Initialize state with 100

  const increment = () => {
    setCount(count + 1); // Increase the count by 1
    console.log(count);  // Log the current count to the console
  };

  const decrement = () => {
    setCount(count - 1); // Decrease the count by 1
    console.log(count);  // Log the current count to the console
  };

  const defult = () => {
    setCount(100); // Reset the count to its default value of 100
    console.log(count);  // Log the current count to the console
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={defult}>Default</button>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);

/*  
What Is Happening in the Code?
---------------------------------
 1.State Initialization:
       -> useState(100) initializes the count state with a starting value of 100.
       -> The useState call returns:
               =>count: The current state value.
               =>setCount: A function used to update the state.

2.Increment Function:
    ->When the "Increase" button is clicked, the increment function:
            =>Updates the count state to count + 1 using setCount.
            =>Logs the current value of count to the console.


3.Rendering the UI:
    ->The count value is displayed in an <h3> tag.
    ->Three buttons are rendered for the user to interact with:
            =>"Increase": Calls the increment function.
            =>"Decrease": Calls the decrement function.
            =>"Default": Calls the defult function.
 */