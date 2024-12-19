const { useState } = React;

function Car() {
    // Initializing the `car` state with an object containing details about a car
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });
    
    // Function to update only the `color` property of the `car` object
    const updateColor = () => {
        setCar((previousState) => {
            // Spread operator copies all properties from the previous state
            // and only updates the `color` property to "blue"
            return { ...previousState, color: "blue" };
        });
    };

    // Function to replace the entire `car` object with new values
    const updateObject = () => {
        setCar({
            brand: "BMW",  // Updates `brand` to "BMW"
            model: "001",  // Updates `model` to "001"
            year: "1974",  // Updates `year` to "1974"
            color: "Yellow", // Updates `color` to "Yellow"
        });
    };

    return (
        <>
            {/* Display the brand of the car */}
            <h1>My {car.brand}</h1>

            {/* Display details about the car: color, model, and year */}
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>

            {/* Button to update only the color of the car */}
            <button type="button" onClick={updateColor}>Blue</button>

            {/* Button to replace the entire `car` object with new values */}
            <button type="button" onClick={updateObject}>ChangeObject</button>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);



/*
=>In React, when you update an object in the state, the entire object is replaced.
 If you only update one property (e.g., the color), 
the other properties will be lost unless you explicitly include them in the new state.

Example->
        ---------------------------------------------------------------------------
        const { useState } = React;

        function Car() {
            const [car, setCar] = useState({
              brand: "Ford",
              model: "Mustang",
              year: "1964",
              color: "red"
            });
          
          
            return (
              <>
                <h1>My {car.brand}</h1>
                <p>
                  It is a {car.color} {car.model} from {car.year}.
                </p>
                <button  type="button" onClick={()=>setCar({color:"blue"})}>Blue</button>
              </>
            )
          }
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Car />);
          ----------------------------------------------------------------------------

  =>Key Idea: Use the Spread Operator (...) to Keep Other Properties
        ->Updating Only the color Property:
        ex-__________________________________________________
            const updateColor = () => {
            setCar(previousState => {
              return { ...previousState, color: "blue" };
               });
            };
           __________________________________________________
        ->previousState: The current car object.
        ->{ ...previousState }: Copies all properties from the previousState into a new object.
        ->color: "blue": Overwrites the color property in the copied object.


=>Final Alternative
        ---------------------------------------------------------------------------
        const { useState } = React;

        function Car() {
            const [car, setCar] = useState({
              brand: "Ford",
              model: "Mustang",
              year: "1964",
              color: "red"
            });
          
          
            return (
              <>
                <h1>My {car.brand}</h1>
                <p>
                  It is a {car.color} {car.model} from {car.year}.
                </p>
                <button  type="button" onClick={()=>setCar({color:"blue"})}>Blue</button>
              </>
            )
          }
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Car />);
          ----------------------------------------------------------------------------

Note|-
=>Use the spread operator to update only specific properties while preserving the rest of the state.
=>Replace the entire object if all properties need to change.
=>React efficiently re-renders components based on state changes.


  */