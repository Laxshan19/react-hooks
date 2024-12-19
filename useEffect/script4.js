//example use case-3 Event Listener
const { useState,useEffect } = React;

function ResizeComponent() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized:", window.innerWidth);
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);
    console.log("Resize listener added");

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Resize listener removed");
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
  <h1>Resize the window and check the console!</h1>
  <a href="about.html">about</a>
  </>
);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ResizeComponent />);  