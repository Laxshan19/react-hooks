const {useRef}=React;
//Accessing a DOM Element
//You can use useRef to directly access a DOM element, similar to how you might use document.getElementById in plain JavaScript.

function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(< TextInputWithFocusButton/>);