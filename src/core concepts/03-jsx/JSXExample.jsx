import "../../App.css"

export default function JSXExample() {
    const name = "Logesh"; 
    return <>
    <h1 className="bg-color">Hello {name}</h1>
    <p style={{backgroundColor:"yellow",border:"1px solid black"}}> this is a sample text </p>
    </>
}