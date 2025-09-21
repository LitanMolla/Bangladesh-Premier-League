import React from 'react'
import Container from '../Container/Container'
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard'

const SelectedPlayer = ({players,removeItem,setToggle}) => {
    return (
        <>
            <div className="">
                <Container>
                    {
                        players.length === 0
                        &&
                        <h4 className='text-center text-2xl font-bold my-20'>Selected player not found!</h4>
                    }
                    <div className="space-y-2 mb-5">
                        {
                            players.map(player => (
                                <SelectedPlayerCard
                                key={player.id} 
                                player={player}
                                removeItem={removeItem}
                                />
                            ))
                        }
                    </div>
                    <button onClick={()=>setToggle(true)} className='bg-yellow-600 text-gray-100 px-6 py-3 rounded-lg cursor-pointer'>Add More Player</button>
                </Container>
            </div>
        </>
    )
}

export default SelectedPlayer