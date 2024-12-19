//example use case-1 fetch the datas
const { useState,useEffect } = React;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty array ensures this runs only once

return (
    <>
    <h1>Datas</h1>
    <div>{JSON.stringify(data)}</div>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);