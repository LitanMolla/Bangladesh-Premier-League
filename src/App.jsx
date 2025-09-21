import { Suspense, useState } from "react"
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers"
import Container from "./components/Container/Container"
import Navbar from "./components/Navbar/Navbar"
import SelectedPlayer from "./components/SelectedPlayer/SelectedPlayer"
import { toast, ToastContainer } from "react-toastify"
import Loading from "./components/Loaders/Loading"

const promise = fetch('./data.json').then(response => response.json())
function App() {
  const [toggle, setToggle] = useState(true);
  const [blance,setBlance]=useState(500000)
  const [selected,setSelected]=useState([]);
  const handelSelect = (player)=>{
    setSelected([...selected,player])
  }
  const removeItem = (player)=>{
    const index = selected.indexOf(player);
    selected.splice(index,1);
    setSelected([...selected]);
    setBlance(blance+player.price);
    toast.warn(`${player.name} has been deleted!`)
  }
  return (
    <>
      <div>
        <Navbar 
        blance={blance}
        />
        <Container>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">{toggle?'Available Players':`Selected Player (${selected.length}/6)`}</h2>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button onClick={()=>setToggle(true)} className={`${toggle && 'bg-yellow-500'} px-5 py-2 font-bold cursor-pointer`}>Available</button>
              <button onClick={()=>setToggle(false)} className={`${toggle || 'bg-yellow-500'} px-5 py-2 font-bold cursor-pointer`}>Selected ({selected.length})</button>
            </div>
          </div>
        </Container>
        {
          toggle
          ?
          <Suspense fallback={<Loading/>} >
            <AvailablePlayers
              players={promise}
              blance={blance}
              setBlance={setBlance}
              handelSelect={handelSelect}
              selected={selected}
            />
          </Suspense>
          :
          <SelectedPlayer 
          players={selected}
          removeItem={removeItem}
          setToggle={setToggle}
          />
        }
      </div>
      <ToastContainer
      theme="dark"
      />
    </>
  )
}

export default App
