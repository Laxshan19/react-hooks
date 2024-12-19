const { useState, createContext, useContext } = React;

// Create the context
const UserContext = createContext();

function Component1() {
    const [user] = useState('Lax'); // Define the user value,
                                  // we have to use this value in "Component1" and "ComponentFinal",
                                  // we have to pass the value to "ComponentFinal"
    return (
        <UserContext.Provider value={user}>
            <h1>Hello {user}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <Component3 />
            <p>Component2</p>
        </>
    );
}

function Component3() {
    return (
        <>
            <Component4 />
            <p>Component3</p>
        </>
    );
}

function Component4() {
    return (
        <>
            <ComponentFinal />
            <p>Component4</p>
        </>
    );
}

function ComponentFinal() {
    const user = useContext(UserContext); // Correct use of useContext
    return (
        <>
            <h3>Thank you {user}...</h3>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);

/*
  =>The useContext hook is a powerful tool in React that allows you to access context values directly in a functional component.
   This eliminates the need to pass props through multiple levels of components (also known as "prop drilling").

__________When to Use useContext__________
=>Shared State: When multiple components need access to the same data (e.g., theme, authentication status, user preferences).
=>Avoiding Prop Drilling: To simplify passing data through deeply nested components.

=>Key Points to Remember
      ->Dynamic Values: The context value can be dynamic, such as state or a derived value.
        Avoid Overuse: While useContext is useful, overusing it for every state can lead to performance issues. Use it for truly shared data.
        Optimizing Performance: React will re-render all components consuming a context value when the value changes. Consider memoization techniques to optimize performance.


=>Passing "props" through nested components:
     -> State should be held by the highest parent component in the stack that requires access to the state
     -> To illustrate, we have many nested components. The component at the top and bottom of the stack need
          access to the state.
     -> To do this without Context, we will need to pass the state as "props" through each nested component. 
          This is called "prop drilling".
-----Example------------------------------------------------------------------------------------------------------

const { useState } = React; 

 function Example1(){
    const [user]=useState('Lax');
    return(
        <>
        <h1>Example1</h1>
        <Component1 user={user}/>
        </>
    )
}

function Component1({user}){
    return(
        <>
        <h3>Component1</h3>
        <Component2 user={user}/>
        </>
    )
}

function Component2({user}){
    return(
        <>
        <h3>Component2</h3>
        <Component3 user={user}/>
        </>
    )
}

function Component3({user}){
    return(
        <>
        <h3>Component3</h3>
        <Component4 user={user}/>
        </>
    )
}

function Component4({user}){
    return(
        <>
        <h3>Component4</h3>
        <Component5 user={user}/>
        </>
    )
}

function Component5({user}){
    return(
        <>
        <h3>Component5</h3>
        <h1>{`user is ${user}`}</h1>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example1/>);
-----------------------------------------------------------------------------------------------------------


The Solution is useing useConteaxt hooks like above code.
*/
