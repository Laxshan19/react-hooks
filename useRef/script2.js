const {useRef,useEffect}=React;
//Accessing a DOM Element
//You can use useRef to directly access a DOM element, similar to how you might use document.getElementById in plain JavaScript.
const StyleElement=()=>{
const colorParagrap=useRef(null); //colorParagraph={current:null}
const colors = ['#d529d0', '#29d5a3', '#d5d129', '#2929d5', '#d54a29', '#29d54a', '#d52981', '#29d5d5'];

useEffect(()=>{
    console.log(colorParagrap);
    console.log(colorParagrap.current);
})

const styleParagrap=()=>{
const randomColor=Math.floor(Math.random()*colors.length);  //generate the rendom number within array lenth.
colorParagrap.current.style.color=colors[randomColor];
}
    
    return (
        <>
         <button onClick={()=>{styleParagrap()}}>Color</button>
         <h2 ref={colorParagrap}>Welcome Guys...</h2>   {/*colorParagrap={current:h2}*/}
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<StyleElement/>);