import { useState } from "react"
import { GiCrossedSwords } from "react-icons/gi";


function App() {
  const [color, setColor] = useState("olive")    // State Hook

  return (
    <>
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
      >
      <div className="fixed  justify-center bottom-100 inset-x-0 text-center text-2xl m-6 text-white font-mono italic px-2">Background Color Changer</div>
        <div className="fixed ml-96   bottom-96   px-2 "><GiCrossedSwords size="150" color="white" style={{ alignItems: "center", display: "flex" }} /></div>
        <div className="fixed right-96   bottom-96   px-2 "><GiCrossedSwords size="150" color = "white" style={{alignItems:"center", display: "flex"}}  /></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>
          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          <button
          onClick={() => setColor("aqua")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "aqua"}}
          >Aqua</button>
        </div>
      </div>
      </div>
      </>
  )
}

export default App